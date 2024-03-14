const {Router} = require('express')
const UsersControllers = require('../controllers/UsersController')

const usersRoutes = Router()

const usersControllers = new UsersControllers()

usersRoutes.post('/', usersControllers.create)
usersRoutes.get('/', usersControllers.listUsers)
usersRoutes.delete('/:id', usersControllers.deleteUser)
usersRoutes.put('/:id', usersControllers.updateUser)

module.exports = usersRoutes


