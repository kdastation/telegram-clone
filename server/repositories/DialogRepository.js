import { db } from '../db.js'

class DialogRepository {
  getAllByUser(userId) {
    return db.dialogs.filter((dialog) => {
      return dialog.author === userId || dialog.partner === userId
    })
  }
}

export const dialogRepository = new DialogRepository()
