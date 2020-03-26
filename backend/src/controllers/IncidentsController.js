const connection = require('../database/connection');



module.exports = {
    // metodo de listar casos ou incidentes
    async index(request,response){
      const { page = 1 } = request.query;

      const [count] = await connection('incidents').count();

      const incidents = await connection('incidents')
         .join('ongs','fk_ong', '=', 'incidents.fk_ong' )
         .limit(5) // define limite de conteudo por paginas
         .offset((page - 1) * 5) // troca de pagina sempre 5 em 5
         .select(['incidents.*', 
         'ongs.nome',
         'ongs.email',
         'ongs.telefone',
         'ongs.cidade', 
         'ongs.uf']); // seleciona todos elementos de incidents
    

        response.header('X-Total-Count-Pages', count['count(*)'])

        return response.json(incidents);
    },

    // cria casos ou incidents
    async create(request,response){
        const{titulo, descricao, valor} = request.body;
        const fk_ong = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            titulo,
            descricao,
            valor,
            fk_ong,
        })

        return response.json({id});
    },

    async delete(request,response){
        const {id} = request.params;
        const fk_ong = request.headers.authorization;

        const incidents = await connection('incidents').where('id',id).select('fk_ong').first();

        if(incidents.fk_ong != fk_ong){
            return response.status(401).json({erro: 'operação negada.'});
        }

        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }


}