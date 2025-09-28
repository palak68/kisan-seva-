const nodemailer = require('nodemailer');
require('dotenv').config(); 

async function sendEmail(to, subject, text) {
  
  try{let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let info = await transporter.sendMail({
    from: `"Agrimitra" <${process.env.SMTP_USER}>`,
    to: to,
    subject: subject,
    text: text
  });

  console.log("Message sent: %s", info.messageId);
}catch(err){
  console.log("Email not sent:",err.message);
}
}

module.exports = sendEmail;
