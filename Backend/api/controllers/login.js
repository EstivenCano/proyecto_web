const ServicioPG = require("../services/postgres");

let ingresar = async (user, password, rol) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.acc_usuarios where id = '${user}' and clave = '${password}' and rol = '${rol}'`;
  let respuesta = await _servicio.ejecutarSql(sql);  
  return respuesta;
};

module.exports = {
  ingresar,
};
