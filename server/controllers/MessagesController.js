import { messagesRepository } from '../repositories/MessagesRepository.js'
import { faker } from '@faker-js/faker'
import { dialogRepository } from '../repositories/DialogRepository.js'

export class MessagesController {
  constructor(socket) {
    this.socket = socket
  }

  getAllByDialog(request, response, next) {
    try {
      const id = request.params.id

      const messages = messagesRepository.getByDialog(id)

      return response.json({ results: messages })
    } catch (e) {
      next(e)
    }
  }

  create = (request, response, next) => {
    try {
      const body = request.body

      const newMessage = {
        id: faker.string.uuid(),
        dialogId: body.dialogId,
        text: body.text,
        user: request.user.id,
      }

      const dialog = dialogRepository.getById(body.dialogId)

      if (dialog) {
        this.socket.to(dialog.author).emit('new-message', newMessage)
        this.socket.to(dialog.partner).emit('new-message', newMessage)
      }

      return response.json({ status: 'ok', data: newMessage })
    } catch (e) {
      next(e)
    }
  }
}
