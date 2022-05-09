const nodeMailer = require('nodemailer')

exports.sendEnpmail = async options => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '6fe575f7d4b269',
      pass: 'dbaccc28d09dc4'
    }
  })

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  await transporter.sendMail(mailOptions)
}
