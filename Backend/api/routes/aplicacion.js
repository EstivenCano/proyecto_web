const express = require("express");
const router = express.Router();

const {
  validarAplicacion,   
  guardarAplicacion,
  consultarAplicaciones,
  eliminarAplicacion,
  consultarAplicacion,
  modificarAplicacion
} = require("../controllers/aplicacion");


/**
 * Obtener todos las aplicaciones
 */
router.get("/aplicacion", (req, res) => {

    let filtros = req.query;
  
    consultarAplicaciones(filtros).then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({
        ok: true,
        info: registros,
        mensaje: 'Aplicaciones consultadas.'
      });
    }).catch(error => {
      res.send(error);
    });
  });

  router.post("/aplicacion", (req, res) => {

    try {
      //Capturar el body desde la solicitud
      let info_aplicacion = req.body;
      //Validar la informacion, si hay un error se envia al catch
      console.log(info_aplicacion);
      validarAplicacion(info_aplicacion);
  
      //Guardar la aplicación en base de datos
      guardarAplicacion(info_aplicacion).then(respuestaDB => {
        res.send({
          ok: true,
          mensaje: "Marcador guardado.",
          info: info_aplicacion
        });
      }).catch(error => {
        res.send(error);
      })
  
      //Responder 
  
    } catch (error) {
      res.send(error);
    }
  
  });

/**
 * Eliminar una aplicación según su ID
 */
router.delete("/aplicacion/:id", (req, res) => {
  
  let id = req.params.id;
  eliminarAplicacion(id).then(respuestaDB => {
    res.send({
      ok: true,
      info: {},
      mensaje: 'Aplicación eliminada.'
    });
  }).catch(error => {
    res.send(error);
  });
});

/**
 * Consultar aplicación específica por ID
 */
router.get("/aplicacion/:id", (req, res) => {
  let id = req.params.id;
  consultarAplicacion(id).then(respuestaDB => {
    let registros = respuestaDB.rows;
    let mensaje = registros.length > 0 ? 'Aplicación consultada.' : 'Sin registro.';
    res.send({
      ok: true,
      info: registros, 
      mensaje: mensaje
    });
  }).catch(error => {
    res.send(error);
  });
});

/**
 * Modificar marcador según su ID
 */
router.put("/aplicacion/:id",(req,res) =>{
  //Capturar el parámetro de la ruta
  let id = req.params.id;

  let aplicacion = req.body;
  
  modificarAplicacion(aplicacion,id).then(respuestaDB => {
    res.send({ok:true , mensaje: "Aplicación modificada", info: respuestaDB})
  }).catch(error => {
    res.send({ok:false , mensaje: "No se pudo modificar la aplicación", info: error})
  })
});


module.exports = router;