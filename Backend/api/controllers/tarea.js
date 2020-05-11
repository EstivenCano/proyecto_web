const ServicioPG = require("../services/postgres");

/**
 * Validar la información de la Tarea
 * @param {*} tarea
 */
let validarTarea = (tarea) => {
  if (!tarea.id) {
    throw {
      ok: false,
      mensaje: "El id de la tarea es obligatorio",
    };
  }
  if (!tarea.nombre) {
    throw {
      ok: false,
      mensaje: "El nombre de la tarea es obligatorio",
    };
  }
  if (!tarea.descripcion) {
    throw {
      ok: false,
      mensaje: "La descripción de la tarea es obligatoria",
    };
  }
  if (!tarea.modulo) {
    throw {
      ok: false,
      mensaje: "El modulo de la tarea es obligatorio",
    };
  }
};

let guardarTarea = async (tarea) => {
  let _servicio = new ServicioPG();
  let sql = `INSERT INTO public.cm_tareas(id, nombre, descripcion, modulo)
        VALUES (
           '${tarea.id}',
           '${tarea.nombre}', 
           '${tarea.descripcion}',
           '${tarea.modulo}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarTareas = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_tareas`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarTarea = async (id) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_tareas WHERE id=${id}`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarTarea = async (id) => {
  let _servicio = new ServicioPG();
  let sql = `DELETE FROM public.cm_tareas WHERE id=${id}`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let modificarTarea = async (tarea, id) => {
  if (tarea.id != id) {
    throw { ok: false, mensaje: "Id erroneo, no encontrado" };
  } else {
    let _servicio = new ServicioPG();
    let sql = `UPDATE public.cm_tareas
	SET nombre='${tarea.nombre}', descripcion='${tarea.descripcion}', modulo='${tarea.modulo}'
	WHERE id= ${tarea.id};`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  }
};

module.exports = {
  validarTarea,
  guardarTarea,
  consultarTareas,
  consultarTarea,
  eliminarTarea,
  modificarTarea,
};
