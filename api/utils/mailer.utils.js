const nodemailer = require("nodemailer");
const msgCodes = require("./messageCodes.utils")

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "pasionargenta@outlook.com",
    pass: "pasionargentina123",
  }, // PASAR AUTH A .ENV
});

const sendEmail= (user, msgCode, order)=> {

  const options = {
    from: "pasionargenta@outlook.com",
    to: user.email,
    subject: msgCodes(msgCode, user).subject,
    text:  msgCodes(msgCode, user).body,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(error);
      return;
    }
    console.log("sent: ", info.response);
  });
}
module.exports = sendEmail