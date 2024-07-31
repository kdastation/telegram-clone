import { db } from '../db.js'

class MessagesRepository {
  getByDialog(dialogId) {
    return db.messages.filter((message) => message.dialogId === dialogId)
  }
}

export const messagesRepository = new MessagesRepository()
