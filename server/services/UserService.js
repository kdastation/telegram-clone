import { userRepository } from '../repositories/UserRepository.js'
import { ApiError } from '../exceptions/ApiError.js'

class UserService {
  login(email) {
    const user = userRepository.getByEmail(email)

    if (!user) {
      throw ApiError.BadRequest('User not found')
    }

    return {
      user,
      token: user.id,
    }
  }
}

export const userService = new UserService()
