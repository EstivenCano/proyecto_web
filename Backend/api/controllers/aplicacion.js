/**
 * Controlador de aplicación
 */

//Importar servicio de postgres
const ServicioPg = require('../services/postgres');
/**
 * Validar la información de la aplicación
 * @param {*} aplicacion json de la aplicación
 */
let validarAplicacion = (aplicacion) => {
  if (!aplicacion) {
    throw {
      ok: false,
      mensaje: "La información de la aplicación es obligatoria"
    };
  };
  if (!aplicacion.nombre) {
    throw {
      ok: false,
      mensaje: "El nombre es obligatorio"
    };
  };
  if (!aplicacion.apellido) {
    throw {
      ok: false,
      mensaje: "El apellido es obligatorio"
    };
  };
  if (!aplicacion.correo) {
    throw {
      ok: false,
      mensaje: "El correo es obligatorio"
    };
  };
  if (!aplicacion.id_convenio) {
    throw {
      ok: false,
      mensaje: "El convenio es obligatorio"
    };
  };
  if (!aplicacion.celular) {
    throw {
      ok: false,
      mensaje: "El número de celular es obligatorio"
    };
  };
}

/**
 * Guardar aplicación en la base de datos
 * @param {*} aplicacion 
 */
let guardarAplicacion = async aplicacion => {

  try {
    let servicio = new ServicioPg();
    let sql = `INSERT INTO public.cm_aplicaciones(
        nombre, apellido, correo, id_usuario,id_convenio,celular, estado_aplicacion,acciones)
        VALUES (
            '${aplicacion.nombre}', 
            '${aplicacion.apellido}', 
            '${aplicacion.correo}', 
            '${aplicacion.id_usuario}',
            '${aplicacion.id_convenio}',
            '${aplicacion.celular}',
            'Enviado',
            'true');`;
    let respuesta = await servicio.ejecutarSql(sql);
    return respuesta;
  } catch (error) {
    console.log("Error: ");

    console.log(error);
    throw {
      ok: false
    };

  }
};

/**
 * Método para consultar aplicaciones desde la base de datos
 */
let consultarAplicaciones = async (filtros) => {

  let servicio = new ServicioPg();
  //filtro 
  let _where = "";
  let llaves = Object.keys(filtros);
  if (llaves.length < 1) {

    let sql = `SELECT * FROM public.cm_aplicaciones`
    let respuesta = await servicio.ejecutarSql(sql)
    return respuesta;
  } else {

    llaves.forEach((x, i) => {
      _where += `${x} = '${filtros[x]}'`;

      if (i < llaves.length - 1) _where += "AND";
    });

    let sql = `SELECT * FROM public.cm_aplicaciones WHERE ${_where}`
    let respuesta = await servicio.ejecutarSql(sql)
    return respuesta;
  }

};

/**
 * Consultar aplicación según ID
 * @param {*} id 
 */
let consultarAplicacion = async (id) => {

    let servicio = new ServicioPg();
    let sql = `SELECT * FROM public.cm_aplicaciones WHERE id = '${id}'`
    let respuesta = await servicio.ejecutarSql(sql)
    return respuesta;
  };

/**
 * Eliminar marcador según ID
 * @param {*} id 
 */
let eliminarAplicacion = async (id) => {

  let servicio = new ServicioPg();
  let sql = `DELETE FROM public.cm_aplicaciones WHERE id ='${id}' `
  let respuesta = await servicio.ejecutarSql(sql)
  return respuesta;
};

/**
 * Método para modificar una aplicación
 * @param {*} aplicacion 
 * @param {*} id 
 */
let modificarAplicacion = async (aplicacion, id) => {

  if (aplicacion.id != id) {
    throw {
      ok: false,
      mensaje: "El id de la aplicación no corresponde al enviado",
    }
  }
  let servicio = new ServicioPg();
  let sql = `UPDATE public.cm_aplicaciones
   SET nombre='${aplicacion.nombre}', apellido='${aplicacion.apellido}', 
   correo='${aplicacion.correo}', id_convenio='${aplicacion.id_convenio}',
   celular='${aplicacion.celular}', estado_aplicacion = '${aplicacion.estado_aplicacion}'
   WHERE id='${aplicacion.id}'; `;
  let respuesta = await servicio.ejecutarSql(sql)
  return respuesta;
}


module.exports = {
    validarAplicacion,   
    guardarAplicacion,
    consultarAplicaciones,
    eliminarAplicacion,
    consultarAplicacion,
    modificarAplicacion 
  };
  