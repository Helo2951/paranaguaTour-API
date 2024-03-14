const knex = require('../database/knex')

class PointsController {
    async createPoints(req, res) {
        const {name, description, location, category} = req.body

        // const media = await knex('comments').where({points_id: })

        const pointId = await knex('points').insert({
            name,
            description,
            location,
            category,
        })
        console.log(pointId)

        return res.status(201).json('Ponto criado com sucesso')
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
        const {name, description, location, category} = req.body

        await knex('points').where({id}).update({
            name,
            description,
            location,
            category
        })
        return res.status(200).json('Ponto atualizado com sucesso')
    }
    // async updateRating(req, res){
    //     const {id} = req.params
    //     const totalRating = await knex('comments').sum('rating').where({points_id: id})
    //     const totalComments = await knex('comments').where({points_id: id}).count()
    //     const result = totalRating.find(rating => rating.id === id)

    //     console.log(result)


    // }
}
module.exports = PointsController
