const knex = require('../database/knex')

class CommentsControllers {
    async create(req, res) {
    const {title, comment} = req.body
    const {user_id, points_id, rating} = req.params
    
    await knex('comments').insert({
        title,
        comment,
        user_id,
        points_id,
        rating
    })

    const ratingValue = await knex('comments').where({points_id: points_id})
        
    const totalRating = ratingValue.map(rate => rate.ratingValue).reduce((acc, current) => acc + current)
    const totalComments = ratingValue.length

    const media = totalRating / totalComments
    
    return res.status(201).json(media)
    }
    async listComments(req, res) {
        const comments = await knex('comments');
        return res.status(200).json(comments);
    }
    async deleteComment(req, res) {
        const {id} = req.params;

        await knex('comments').where({id}).delete()

        return res.status(200).json('success')
    }
    async updateComment(req, res) {
        const {id} = req.params;
        const {title, comment} = req.body;

        await knex('comments').where({id}).update({
            title,
            comment,
        })
        return res.status(200).json('sucess')
    }

    async updateRating(pointId){
        
    }
}

module.exports = CommentsControllers