const axios = require('axios');
const Developer = require('../models/Developer');
//const parseStringAsArray = require('../utils/parseStringAsArray');

/**
 * @description mudule developer controller
 */
//index, show, store, update, destroy
module.exports = {

    /**
     * create developer register in database
     * @param {*} request 
     * @param {*} response 
     */
    async create(request, response) {
        const {
            name,
            email,
            telefone,
            linkenid,
            cidade,
            estado,
            turno,
            node,
            angular,
            css,
            html,
            banco_de_dados
        } = request.body;

        let dev = await Developer.findOne({
            email
        });
        if (!dev) {
            //const { name = login, avatar_url, bio } = apiResponse.data;

            let dev = await Developer.create({
                name,
                email,
                telefone,
                linkenid,
                cidade,
                estado,
                turno,
                node,
                angular,
                html,
                css,
                banco_de_dados
            });

            return response.json({
                dev
            });

        }

        return response.json({
            dev
        });

    },

    /**
     * @description list all developers
     * @param {*} request 
     * @param {*} response 
     */
    async list(request, response) {

        let devs = await Developer.find();


        return response.json(devs);
    },

    /**
     * @description get developers by id
     * @param {*} request 
     * @param {*} response 
     */
    async listbyId(request, response) {
        const id = request.params.id;
        let devs;
        devs = await Developer.find({
            "_id": id
        }, (err, res) => {
            if (err) {
                response.json({
                    "error": "usuário não encontrado"
                });
            }
            devs = res;
        });


        return response.json(devs);
    },

    /**
     * @description update developer
     * @param {*} request 
     * @param {*} response 
     */
    async update(request, response) {
        const {
            _id,
            name,
            email,
            telefone,
            linkenid,
            cidade,
            estado,
            turno,
            node,
            angular,
            html,
            css,
            banco_de_dados
        } = request.body;

        devs = await Developer.updateOne({
            "_id": _id
        }, {
            $set: {
                "_id": _id,
                "name": name,
                "email": email,
                "telefone": telefone,
                "linkenid": linkenid,
                "cidade": cidade,
                "estado": estado,
                "turno": turno,
                "node": node,
                "angular": angular,
                "html": html,
                "css": css,
                "banco_de_dados": banco_de_dados


            }
        });

        return response.json(devs);

    },


    /**
     * @description Delete developer
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response) {
        const _id = {
            _id: request.params.id
        };

        const delet = await Developer.deleteOne(_id, function (err) {
            if (err) return handleError(err);

        });
        return response.json({
            "message": "deletado com sucesso!"
        });

    }

}