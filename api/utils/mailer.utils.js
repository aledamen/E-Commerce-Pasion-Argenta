const nodemailer = require('nodemailer')
const msgCodes = require('./messageCodes.utils')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASSWORD,
    },
})

const sendEmail = (user, msgCode, order) => {
    const options = {
        from: 'pasionargenta@outlook.com',
        to: user.email,
        subject: msgCodes(msgCode, user, order).subject,
        text: msgCodes(msgCode, user, order).body,
    }

    transporter.sendMail(options, function (err, info) {
        if (err) {
            console.error(err)
            return
        }
    })
}
module.exports = sendEmail
