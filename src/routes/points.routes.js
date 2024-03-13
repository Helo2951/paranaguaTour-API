const {Router} = require('express')
const PointsControllers = require('../controllers/PointsControllers')

const pointsRoutes = Router()

const pointsControllers = new PointsControllers()

pointsRoutes.post('/', pointsControllers.createPoints);
pointsRoutes.get('/', pointsControllers.listPoints);
pointsRoutes.delete('/:id', pointsControllers.deletePoints);
pointsRoutes.put('/:id', pointsControllers.updatePoints);

module.exports = pointsRoutes

