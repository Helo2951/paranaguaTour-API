const knex = require('../database/knex')

class CommentsControllers {
    async create(req, res) {
    const {title, comment} = req.body
    const {user_id, points_id} = req.params
    
    await knex('comments').insert({
        title,
        comment,
        user_id,
        points_id
    })
    return res.status(201).json('Comentário criado com sucesso')
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
}

module.exports = CommentsControllers