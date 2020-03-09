const axios = require('axios');
const Developer = require('../models/Developer');
//const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy
module.exports = {
    async create(request, response) {
        const { name, email, telefone, linkedin, cidade, estado, turno, habilidade, nivel } = request.body;

        let dev = await Developer.findOne({ email });
        if (!dev) {
            //const { name = login, avatar_url, bio } = apiResponse.data;

            let dev = await Developer.create({
                name,
                email,
                telefone,
                linkedin,
                cidade,
                estado,
                turno,
                habilidade,
                nivel,
            });

            return response.json({ dev });

        }

        return response.json({ dev });

    },

    async list(request, response) {

        let devs = await Developer.find();
       

        return response.json(devs);
    },


    async listbyId(request, response) {
        const email = request.params.id;
        let devs;
        if (email) {
            devs = await Developer.find({ email: email });
            (!dev)
            return response.json("error","desenvolvedor não encontrado");
        } else {
            devs = await Developer.find();
        
        }

        return response.json(devs);
    },

    async update(request, response) {
        const { name, email, telefone, linkedin, cidade, estado, turno, habilidade, nivel } = request.body;

        console.log(email);
        devs = await Developer.updateOne({"email":email},
        {$set:{
            "name":name,
            "email":email,
            "telefone":telefone,
            "linkedin":linkedin, 
            "cidade":cidade, 
            "estado":estado, 
            "turno":turno, 
            "habilidade":habilidade, 
            "nivel":nivel

        }});

        return response.json(devs);

    },

    async delete(request, response) {
        const  _id = request.body;
        
        const delet = await Developer.deleteOne(_id, function (err) {
            if (err) return handleError(err);
          });

        return response.json({"message":"removido com sucesso"});
    }

}