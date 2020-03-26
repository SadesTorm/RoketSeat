const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = { 
    async index(request,response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    
    async create(request,response){
         const {nome, email, telefone, cidade, uf} =  request.body;    
        // gera um id utilizando o (crypo) 
         const id = crypto.randomBytes(4).toString('HEX');

        // so mostra resultado apos finalizar a execução abaixo (await ) utilizada forma async 
         await  connection('ongs').insert({
          id,
          nome,
          email,
          telefone,
          cidade,
          uf,
     })

     return response.json({id})
    }
};
