import { messagesRepository } from '../repositories/MessagesRepository.js'

class MessagesController {
  getAllByDialog(request, response, next) {
    try {
      const id = request.params.id

      const messages = messagesRepository.getByDialog(id)

      return response.json({ results: messages })
    } catch (e) {
      next(e)
    }
  }

  create() {}
}

export const messagesController = new MessagesController()
