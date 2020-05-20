const axios = require('axios');

const ServicioArchivos = require("../services/archivos");

const ServicioCorreo = require("../services/nodemailer");

const archivos = new ServicioArchivos();
const correo = new ServicioCorreo();

let divulgarConvenio = async (correos, convenio) => {
    try {


        let plantilla = archivos
            .leerArchivo("templates/divulgacion.html")
            .toString();

        plantilla = plantilla.replace("t_convenio", convenio.tipo_convenio);
        plantilla = plantilla.replace("descripcion", convenio.descripcion_iniciativa);
        plantilla = plantilla.replace("beneficios", convenio.beneficios);

        let respuesta = correo.enviarCorreo(plantilla, correos, "Divulgación de convenio")
        return respuesta;

    } catch (error) {
        console.error(error);
    }

};

module.exports = {
    divulgarConvenio,
};