const connecction = require('../database/connection');

module.exports = {
    async index(request,response){
        const fk_ong = request.headers.authorization;

        const incidents = await connecction('incidents').where('fk_ong',fk_ong).select('*');

        return response.json(incidents);
    }

};
