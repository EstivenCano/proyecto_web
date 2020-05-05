const express = require("express");
const router = express.Router();

const {
    consultarAplicacion
} = require("../controllers/aplicacion");


/**
 * Obtener todos los marcadores
 */
router.get("/aplicacion", (req, res) => {

    let filtros = req.query;
  
    consultarAplicacion().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({
        ok: true,
        info: registros,
        mensaje: 'Aplicaciones consultadas'
      });
    }).catch(error => {
      res.send(error);
    });
  });


  module.exports = router;