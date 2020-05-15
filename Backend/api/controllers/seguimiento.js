const ServicioPG = require("../services/postgres");

/**
 * Validar la información del seguimiento
 * @param {*} seguimiento
 */
let validarSeg = (seguimiento) => {
  if (!seguimiento.id) {
    throw {
      ok: false,
      mensaje: "El id del seguimiento es obligatorio",
    };
  }
  if (!seguimiento.nombre) {
    throw {
      ok: false,
      mensaje: "El nombre del seguimiento es obligatorio",
    };
  }
  if (!seguimiento.descripcion) {
    throw {
      ok: false,
      mensaje: "La descripción del seguimiento es obligatoria",
    };
  }
  if (!seguimiento.modulo) {
    throw {
      ok: false,
      mensaje: "El modulo del seguimiento es obligatorio",
    };
  }
};

let guardarSeg = async (seguimiento) => {
  let _servicio = new ServicioPG();
  let sql = `INSERT INTO public.cm_seguimientos_aplicaciones(
	id, id_aplicacion, fecha, comentario, estado)
	VALUES (
           '${seguimiento.id}',
           '${seguimiento.id_aplicacion}', 
           '${seguimiento.fecha}',
           '${seguimiento.comentario}',
           '${seguimiento.estado}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarSegs = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_seguimientos_aplicaciones`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarSeg = async (id) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_seguimientos_aplicaciones WHERE id=${id}`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarSeg = async (id) => {
  let _servicio = new ServicioPG();
  let sql = `DELETE FROM public.cm_seguimientos_aplicaciones WHERE id=${id}`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let modificarSeg = async (seguimiento, id) => {
  if (seguimiento.id != id) {
    throw { ok: false, mensaje: "Id erroneo, no encontrado" };
  } else {
    let _servicio = new ServicioPG();
    let sql = `UPDATE public.cm_seguimientos_aplicaciones
	SET id_aplicacion='${seguimiento.id_aplicacion}', fecha='${seguimiento.fecha}', comentario='${seguimiento.comentario}', estado='${seguimiento.estado}'
	WHERE id= ${seguimiento.id};`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  }
};

module.exports = {
  validarSeg,
  guardarSeg,
  consultarSegs,
  consultarSeg,
  eliminarSeg,
  modificarSeg,
};
