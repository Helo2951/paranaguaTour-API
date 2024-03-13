const knex = require('../database/knex')

class CommentsControllers {
    async create(req, res) {
    const {title, message} = req.body
    
    await knex('comments').insert({
        title,
        message,
    })
    return res.status(201).json('success')
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
        const {title, message} = req.message;

        await knex('comments').where({id}).update({
            title,
            message,
        })
        return res.status(200).json('sucess')
    }
}

module.exports = CommentsControllers