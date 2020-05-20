const express = require("express");
const router = express.Router();
const {
    divulgarConvenio,
  } = require("../controllers/divulgacion");


router.get("/divulgacion/correo", (req, res) => {

  });

  router.post("/divulgacion/correo", (req, res) => {

    let info_divulgacion = req.body
    
    
    divulgarConvenio(info_divulgacion.correos,info_divulgacion.id).then(respuesta =>
        {
            res.send({
                ok: true,
                info: info_divulgacion,
                mensaje: 'Correos enviados'
            });
        }
        ).catch(error => {
            res.send(error);
          });
  });


  module.exports = router;
  