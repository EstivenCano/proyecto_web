/**
 * Controladores del filtrado y de la selección de convenios
 */
const ServicioPg = require('../services/postgres');



/**
 * Consultar convenios por pais
 * @param {*} pais
 */
let consultarConvenioPais = async (pais) => {

    let servicio = new ServicioPg();
    let sql = ` SELECT * FROM public.cm_entidades WHERE pais = '${pais}' `;
    let respuesta = await servicio. ejecutarSql(sql);
    return respuesta;
}


/**
 * Consultar convenios por ciudad
 * @param {*} ciudad
 */
let consultarConvenioCiudad = async (ciudad) => {

    let servicio = new ServicioPg();
    let sql = ` SELECT * FROM public.cm_entidades WHERE ciudad = '${ciudad}' `;
    let respuesta = await servicio. ejecutarSql(sql);
    return respuesta;
}


/**
 * Consultar convenios por nombre de la entidad
 * @param {*} nombre
 */
let consultarConvenioEntidad = async (nombre) => {

    let servicio = new ServicioPg();
    let sql = ` SELECT * FROM public.cm_entidades WHERE nombre = '${nombre}' `;
    let respuesta = await servicio. ejecutarSql(sql);
    return respuesta;
}


module.exports = {
    consultarConvenioPais,
    consultarConvenioCiudad,
    consultarConvenioEntidad
}