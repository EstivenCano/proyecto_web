const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/listaConvenio");


router.get('/listaConvenio', (req, resp) => {
    _controlador.consultarConvenios().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/listaConvenio/:tipo', (req, resp) => {
    let tipo = req.params.tipo;
    _controlador.consultarConvenio(tipo).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
})

module.exports = router;