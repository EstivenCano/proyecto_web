const express = require('express')
const CryptoJS = require("crypto-js")
const router = express.Router()
const MD5 = CryptoJS.MD5();

const _controlador = require("../controllers/login");


router.get('/login/:user/:password/:rol', (req, resp) => {   
    let ok = true; 
    let user = req.params.user;
    let password = req.params.password;
    let rol = req.params.rol;
    _controlador.ingresar(user, password, rol).then(respuestaDB => {        
        let registros = respuestaDB.rows;        
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';   
        if (mensaje == 'Sin registro') {
            ok=false;
        }     
        resp.send({ ok, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
})

module.exports = router;