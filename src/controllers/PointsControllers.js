const knex = require('../database/knex')

class PointsController {
    async createPoints(req, res) {
        const {name, description, location} = req.body

        const media = 0

        await knex('points').insert({
            name,
            description,
            location,
            mediaRating: media
        })
        return res.status(201).json('sucess')
    }
    async listPoints(req, res) {
        const points = await knex('points');
        return res.status(200).json(points)
    }
    async deletePoints(req, res) {
        const {id} = req.params;
        await knex('points').where({id}).delete()

        return res.status(200).json('sucess')
    }
    async updatePoints(req, res) {
        const {id} = req.params
        const {name, description, location} = req.body

        await knex('points').where({id}).update({
            name,
            description,
            location,
        })
        return res.status(200).json('sucess')
    }
}
module.exports = PointsController
