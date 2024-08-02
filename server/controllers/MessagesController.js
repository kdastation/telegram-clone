import { messagesRepository } from '../repositories/MessagesRepository.js'
import { faker } from '@faker-js/faker'
import { dialogRepository } from '../repositories/DialogRepository.js'
import { ApiError } from '../exceptions/ApiError.js'

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

      messagesRepository.addOne(newMessage)

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

  delete = (request, response, next) => {
    try {
      const id = request.params.id

      const foundedMessage = messagesRepository.getById(id)

      if (!foundedMessage) {
        throw ApiError.BadRequest('Message not found')
      }

      messagesRepository.removeOne(id)

      const dialog = dialogRepository.getById(foundedMessage.dialogId)

      console.log(dialog, foundedMessage, 'kekekekekek')

      if (dialog) {
        this.socket.to(dialog.author).emit('remove-message', foundedMessage)
        this.socket.to(dialog.partner).emit('remove-message', foundedMessage)
      }

      return response.json({ status: 'ok' })
    } catch (e) {
      next(e)
    }
  }
}
