const {Router} = require('express')
const ImagesControllers = require('../controllers/ImagesControllers');
const checkIsAdmin = require('../middlewares/checkIsAdmin');

const imagesRoutes = Router()

const imagesControllers = new ImagesControllers()

imagesRoutes.post('/:points_id/:user_id', checkIsAdmin, imagesControllers.createImages);
imagesRoutes.get('/', imagesControllers.getImages);
imagesRoutes.delete('/:id/:user_id', checkIsAdmin, imagesControllers.deleteImages);

module.exports = imagesRoutes;



