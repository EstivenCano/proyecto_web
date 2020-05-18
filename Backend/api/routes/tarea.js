const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/tarea");


router.get('/tarea', (req, resp) => {
    _controlador.consultarTareas().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/tarea/:id', (req, resp) => {
    let id = req.params.id;
    _controlador.consultarTarea(id).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.post("/tarea", (req, resp) => {
    try {
        let info_tarea = req.body;
        _controlador.validarTarea(info_tarea);
        _controlador.guardarTarea(info_tarea).then(respuestaDB => {
            resp.send({ ok: true, mensaje: "Efectivamente guardada" });
        }).catch(error => {
            resp.send({ ok: false, mensaje: "Error al guardar" });
        });

    } catch (error) {
        resp.send(error);
    }
});

router.delete("/tarea/:id", (req, resp) => {
    let id = req.params.id;
    _controlador.eliminarTarea(id).then((respuestaDB) => {
        resp.send(respuestaDB);
    }).catch((error) => {
        resp.send(error);
    });


});

router.put("/tarea/:id", (req, resp) => {
    let id = req.params.id; 
    let tarea = req.body;
    _controlador.modificarTarea(tarea, id).then(respuestaDB => {
        resp.send({ ok: true, mensaje: "Modificada exitosamente ", info: respuestaDB });
    }).catch(error => {
        resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    })
})


module.exports = router;