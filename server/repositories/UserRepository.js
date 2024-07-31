import { db } from '../db.js'

class UserRepository {
  getByEmail(email) {
    return db.users.find((user) => user.email === email)
  }
}

export const userRepository = new UserRepository()