const {Router} = require('express')
const PointsControllers = require('../controllers/PointsControllers')
const checkIsAdmin = require('../middlewares/checkIsAdmin')

const pointsRoutes = Router()

const pointsControllers = new PointsControllers()

pointsRoutes.post('/:user_id',checkIsAdmin, pointsControllers.createPoints);
pointsRoutes.get('/', pointsControllers.listPoints);
pointsRoutes.delete('/:id/:user_id', checkIsAdmin, pointsControllers.deletePoints);
pointsRoutes.put('/:id/:user_id', checkIsAdmin, pointsControllers.updatePoints);
// pointsRoutes.patch('/:id', pointsControllers.updateRating);

module.exports = pointsRoutes

