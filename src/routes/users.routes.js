const {Router} = require('express')
const UsersControllers = require('../controllers/UsersController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')

const usersRoutes = Router()

const usersControllers = new UsersControllers()

usersRoutes.post('/', usersControllers.create)
usersRoutes.get('/:user_id', checkIsAdmin, usersControllers.listUsers)
usersRoutes.delete('/:id/:user_id', checkIsAdmin, usersControllers.deleteUser)
usersRoutes.put('/:id', usersControllers.updateUser)

module.exports = usersRoutes


