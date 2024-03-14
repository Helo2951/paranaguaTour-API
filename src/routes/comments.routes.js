const {Router} = require('express');
const CommentsControllers = require('../controllers/CommentsControllers')

const commentsRoutes = Router()

const commentsControllers = new CommentsControllers()

commentsRoutes.post('/:user_id/:points_id', commentsControllers.create);
commentsRoutes.get('/', commentsControllers.listComments);
commentsRoutes.delete('/:id', commentsControllers.deleteComment);
commentsRoutes.put('/:id', commentsControllers.updateComment);

module.exports = commentsRoutes


