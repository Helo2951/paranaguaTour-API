const {Router} = require('express')
const UsersControllers = require('../controllers/UsersController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()

const usersControllers = new UsersControllers()

usersRoutes.post('/', usersControllers.create)

usersRoutes.use(ensureAuthenticated)

usersRoutes.put('/', usersControllers.updateUser)

usersRoutes.use(checkIsAdmin)

usersRoutes.get('/', usersControllers.listUsers)
usersRoutes.get('/:id', usersControllers.listUsersById)
usersRoutes.delete('/:id/', usersControllers.deleteUser)

module.exports = usersRoutes


