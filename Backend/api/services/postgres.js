const { Pool } = require('pg')

class ServicioPG {

    constructor(){
        this.pool = new Pool({
            user: 'ifdyqdeewlposv',
            host: 'ec2-50-17-90-177.compute-1.amazonaws.com',
            database: 'db0btkethduk5h',
            password: 'bf5e722cc518fce3c4a57fdb1b6647b0434138370eb1c30f9293ec8e03062b78',
            port: 5432,
          })
    }

    async ejecutarSql(sql){

        let respuesta = await this.pool.query(sql);
        return respuesta;
    }
}

module.exports = ServicioPG;