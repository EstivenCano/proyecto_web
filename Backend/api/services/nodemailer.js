const nodemailer = require('nodemailer')

class ServicioCorreo{
constructor(){}
// async..await is not allowed in global scope, must use a wrapper
async enviarCorreo(plantilla,destinatario,asunto) {

  // create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'recursosudem@gmail.com',
        pass: 'proyectodeaula00',
    }
});

  // Envia correo con los parámetros establecidos
  let info = await transporter.sendMail({
    from: 'Universidad de Medellín (Movilidad)', // Entidad emisora
    to: destinatario, // Lista de destinatarios
    subject: asunto, // Asunto
    html: plantilla, // html body
  });

  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

}

module.exports = ServicioCorreo;