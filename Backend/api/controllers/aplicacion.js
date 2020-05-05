const ServicioPg = require('../services/postgres');



/**
 * 
 * @param {*} id 
 * Consultar marcador según id
 */
let consultarAplicacion = async () => {

    let servicio = new ServicioPg();
    let sql = `SELECT * FROM public.cm_aplicaciones`
    let respuesta = await servicio.ejecutarSql(sql)
    console.log(respuesta);
    
    return respuesta;
  };


  module.exports = {
    consultarAplicacion
  };
  