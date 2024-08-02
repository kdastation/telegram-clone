import { userController } from '../controllers/UserContoller.js'
import { AuthMiddleware } from '../middlewares/AuthMiddleware.js'
import { dialogController } from '../controllers/DialogController.js'
import { MessagesController } from '../controllers/MessagesController.js'

export const createRoutes = (router, socket) => {
  const messagesController = new MessagesController(socket)

  router.post('/login', userController.login)
  router.get('/dialogs', AuthMiddleware, dialogController.getAll)
  router.get('/me', AuthMiddleware, userController.me)
  router.post('/messages', AuthMiddleware, messagesController.create)
  router.delete('/messages/:id', AuthMiddleware, messagesController.delete)
  router.get('/messages/:id', AuthMiddleware, messagesController.getAllByDialog)
}
