const knex = require('../database/knex');

class ImagesControllers {
    async createImages(req, res) {
        const {link_image} = req.body

        await knex('images').insert({
            link_image
        });
        return res.status(201).json(images);
    }

    async getImages(req, res) {
        const images = await knex('images');
        return res.json(images);
    }

    async deleteImages(req, res) {
        const {id} = req.params;
        await knex('images').where({id}).del();
        return res.status(204).send();
    }
}

module.exports = ImagesControllers;