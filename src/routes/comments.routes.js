const {Router} = require('express');
const CommentsControllers = require('../controllers/CommentsControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const commentsRoutes = Router()

const commentsControllers = new CommentsControllers()

commentsRoutes.use(ensureAuthenticated)

commentsRoutes.post('/:points_id', commentsControllers.create);
commentsRoutes.get('/', commentsControllers.listComments);
commentsRoutes.delete('/:id', commentsControllers.deleteComment);
commentsRoutes.put('/:id', commentsControllers.updateComment);

module.exports = commentsRoutes


