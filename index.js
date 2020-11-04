const nodemailer = require("nodemailer"); 

let transporter = nodemailer.createTransport({
  host: "SMTP.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: ".....@outlook.com", //meu email
    pass: "........" //minha senha
  }
});


transporter.sendMail({
  from: "Vinicius <.....@outlook.com>",//email de origem
  to: "........@gmail.com",//email de destino
  subject: "Teste de email usando o node",
  text: "Usando o nodemailer para enviar testar envio de emails via node js",
  html: "<h1>Node Js</h1><h2>Nodemailer</h2>"
}).then(message => {
  console.log(message);
}).catch(err => {
  console.log(err)
})