const knex = require('../database/knex');
const bcrypt = require('bcryptjs');

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body;

        const isAdmin = false

        const hashedPassword = await bcrypt.hash(password, 8);

        await knex('users').insert({
            name,
            email,
            password: hashedPassword,
            isAdmin
        })
        return res.status(201).json('success');
    }

    async listUsers(req, res) {
        const users = await knex('users');
        return res.status(200).json(users);
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        await knex('users').where({id}).delete();

        return res.status(200).json('success');
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 8);

        await knex('users').where({id}).update({
            name,
            email,
            password: hashedPassword,
        })
        return res.status(200).json('success');
    }
}

module.exports = UsersController;