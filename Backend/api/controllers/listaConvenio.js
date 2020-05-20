const ServicioPG = require("../services/postgres");

let consultarConvenios = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * public.cm_propuestas_convenios`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarConvenio = async (tipo) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.cm_propuestas_convenios inner join public.cm_involucrados 
  on cm_propuestas_convenios.id = cm_involucrados.id_propuesta 
  inner join cm_entidades on cm_entidades.id = cm_involucrados.id_entidad WHERE tipo_convenio= '${tipo}' and estado = 'Aprobado'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarConvenioPais = async (pais) => {
  let _servicio = new ServicioPG();
  let sql = `Select * from public.cm_propuestas_convenios inner join public.cm_involucrados 
  on cm_propuestas_convenios.id = cm_involucrados.id_propuesta 
  inner join cm_entidades on cm_entidades.id = cm_involucrados.id_entidad 
  where cm_entidades.pais =${pais} and cm_propuestas_convenios.estado = 'Aprobado'`;  
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarConvenioEntidad = async (entidad) => {
  let _servicio = new ServicioPG();
  let sql = `Select * from public.cm_propuestas_convenios inner join public.cm_involucrados 
  on cm_propuestas_convenios.id = cm_involucrados.id_propuesta 
  inner join cm_entidades on cm_entidades.id = cm_involucrados.id_entidad 
  where cm_entidades.id =${entidad} and cm_propuestas_convenios.estado = 'Aprobado'`;  
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = {
  consultarConvenios,
  consultarConvenio,
  consultarConvenioPais,
  consultarConvenioEntidad
};
