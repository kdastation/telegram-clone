import { db } from '../db.js'

class DialogRepository {
  getAllByUser(userId) {
    return db.dialogs.filter((dialog) => {
      return dialog.author === userId || dialog.partner === userId
    })
  }
  getById(id) {
    console.log(db.dialogs, id)
    return db.dialogs.find((dialog) => dialog.id === id)
  }
}

export const dialogRepository = new DialogRepository()
