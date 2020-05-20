const ServicioPG = require("../services/postgres");

let consultarConvenios = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * public.cm_propuestas_convenios`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarConvenio = async (tipo) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_propuestas_convenios WHERE tipo_convenio= '${tipo}' and estado = 'Aprobado'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = {
  consultarConvenios,
  consultarConvenio,
};
