const express = require("express");
const router = express.Router();

const { 
    consultarConvenioPais, 
    consultarConvenioCiudad, 
    consultarConvenioEntidad } = require("../controllers/listaFiltrada");

/**
 * Se obtienen todos las entidadesConConveniosPais
 */
router.get("/listaFiltrada/:pais", (req, res) => {
    let pais = req.params.pais;
    consultarConveniosPais(pais).then(respuestaDB => {
        let convenios = respuestaDB.rows;
        res.send({
            ok:true,
            info:convenios
        });
    }).catch(error => {
        res.send(error);
    });
});

/**
 * Se obtienen todos las entidadesConConveniosCiudad
 */
router.get("/listaFiltrada/:ciudad", (req, res) => {
    let ciudad = req.params.ciudad;
    consultarConveniosCiudad(ciudad).then(respuestaDB => {
        let convenios = respuestaDB.rows;
        res.send({
            ok:true,
            info:convenios
        });
    }).catch(error => {
        res.send(error);
    });
});

/**
 * Se obtienen todos las entidadesConConvenios
 */
router.get("/listaFiltrada/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    consultarConveniosNombre(nombre).then(respuestaDB => {
        let convenios = respuestaDB.rows;
        res.send({
            ok:true,
            info:convenios
        });
    }).catch(error => {
        res.send(error);
    });
});


module.exports = router;