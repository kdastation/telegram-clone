import { db } from '../db.js'

class MessagesRepository {
  getByDialog(dialogId) {
    return db.messages.filter((message) => message.dialogId === dialogId)
  }
  getById(id) {
    return db.messages.find((message) => message.id === id)
  }
  removeOne(id) {
    const updatedMessages = db.messages.filter((message) => message.id !== id)
    db.messages = updatedMessages
  }
  addOne(newMessage) {
    db.messages.push(newMessage)
  }
}

export const messagesRepository = new MessagesRepository()
