const connection = require('../database/connection'); // import de classe feita unicamente para encapsular a conexao com o banco de dados
module.exports = {
    async create(request, response){
        const{id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        if(!ong){
            return response.status(400).json({error: 'No ong found with this id'});
        }
        return response.json(ong);
    }       
}