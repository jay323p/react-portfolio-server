const asyncHandler = require('express-async-handler');

const sendEmail = require('../utils/sendEmail');

const sendContactEmail = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please provide all fields.');
  }

  const send_to = 'jay.ashok.p@gmail.com';
  const sent_from = process.env.EMAIL_USER;
  const subject =
    'Person Interested In Contacting Me After Viewing Portfolio Site';

  const emailContent = `
    <h2>Hello Jay</h2>
    <p>${name} is interested in reaching out to you!</p>
    <p>Reach them back at ${email}</p>
    <p>${message}</p>
    <p>Sincerely...</p>
    <p>Jay\'s Nodemailer System</p>
    `;

  try {
    await sendEmail(subject, emailContent, send_to, sent_from);
    res.status(200).json({
      success: true,
      message: 'Email sent, will reach back to you soon!',
    });
  } catch (error) {
    res.status(500);
    throw new Error('Email not sent, please try again!');
  }
});

module.exports = { sendContactEmail };
