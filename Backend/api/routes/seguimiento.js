const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/seguimiento");


router.get('/seguimiento', (req, resp) => {
    _controlador.consultarSegs().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/seguimiento/:id', (req, resp) => {
    let id = req.params.id;
    _controlador.consultarSeg(id).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.post("/seguimiento", (req, resp) => {
    try {
        let info_seguimiento = req.body;
        _controlador.validarSeg(info_seguimiento);
        _controlador.guardarSeg(info_seguimiento).then(respuestaDB => {
            resp.send({ ok: true, mensaje: "Efectivamente guardado" });
        }).catch(error => {
            resp.send({ ok: false, mensaje: "Error al guardar" });
        });

    } catch (error) {
        resp.send(error);
    }
});

router.delete("/seguimiento/:id", (req, resp) => {
    let id = req.params.id;
    _controlador.eliminarSeg(id).then((respuestaDB) => {
        resp.send(respuestaDB);
    }).catch((error) => {
        resp.send(error);
    });


});

router.put("/seguimiento/:id", (req, resp) => {
    let id = req.params.id; 
    let seguimiento = req.body;
    _controlador.modificarSeg(seguimiento, id).then(respuestaDB => {
        resp.send({ ok: true, mensaje: "Modificada exitosamente ", info: respuestaDB });
    }).catch(error => {
        resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    })
})


module.exports = router;