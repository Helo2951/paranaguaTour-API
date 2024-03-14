const {Router} = require('express')
const ImagesControllers = require('../controllers/ImagesControllers')

const imagesRoutes = Router()

const imagesControllers = new ImagesControllers()

imagesRoutes.post('/:points_id', imagesControllers.createImages);
imagesRoutes.get('/', imagesControllers.getImages);
imagesRoutes.delete('/:id', imagesControllers.deleteImages);

module.exports = imagesRoutes;



