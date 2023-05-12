require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { name, emailSend, message } = req.body;

  if (!name || !emailSend || !message) {
    return res.status(400).render('footer/contact2');
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailSend}>`,
      to: 'conton.jerome@gmail.com',
      subject: 'Nouveau message de la part de ' + name,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.render('emailSend');
  } catch (error) {
    console.log(error);
    res.status(500).render('emailNotSend');
  }
};