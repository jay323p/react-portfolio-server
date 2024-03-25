const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const contactMeRoute = require('./routes/contactMeRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: false,
  })
);

app.use('/api/email', contactMeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
