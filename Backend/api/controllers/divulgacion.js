const axios = require('axios');

const ServicioArchivos = require("../services/archivos");

const ServicioCorreo = require("../services/nodemailer");

const archivos = new ServicioArchivos();
const correo = new ServicioCorreo();

let divulgarConvenio = async (correos, id) => {
    try {
        let url = `http://localhost:3001/aplicacion/${id}`;
        this.loading = true;
        const response = await axios.get(url);
        let datosCorreo = JSON.parse(response.data.info);
        console.log(datosCorreo);

        let plantilla = archivos
            .leerArchivo("templates/divulgacion.html")
            .toString();

        plantilla = plantilla.replace("n_convenio", id);
        plantilla = plantilla.replace("n_entidad", correos);
        //console.log(plantilla);

        let respuesta = correo.enviarCorreo(plantilla, correos, "Divulgación de convenio")
        return respuesta;

    } catch (error) {
        console.error(error);
    }

};

module.exports = {
    divulgarConvenio,
};