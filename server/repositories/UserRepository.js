import { db } from '../db.js'

class UserRepository {
  getByEmail(email) {
    return db.users.find((user) => user.email === email)
  }
  getById(id) {
    return db.users.find((user) => user.id === id)
  }
}

export const userRepository = new UserRepository()
