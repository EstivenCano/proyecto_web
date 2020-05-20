const express = require("express");
const router = express.Router();
const {
  divulgarConvenio,
} = require("../controllers/divulgacion");


router.get("/divulgacion/correo", (req, res) => {

});

//Obtienen los datos de correo como el convenio y los destinatarios
router.post("/divulgacion/correo", (req, res) => {

  let info_divulgacion = req.body

  //Asigna los datos al método para enviar correo.
  divulgarConvenio(info_divulgacion.correos, info_divulgacion.convenio).then(respuesta => {
    res.send({
      ok: true,
      info: info_divulgacion,
      mensaje: 'Correos enviados'
    });
  }).catch(error => {
    res.send(error);
  });
});


module.exports = router;