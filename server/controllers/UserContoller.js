import { userService } from '../services/UserService.js'
import { userRepository } from '../repositories/UserRepository.js'

class UserController {
  login(request, response, next) {
    try {
      const { email } = request.body

      const userData = userService.login(email)

      response.cookie('token', userData.token, {
        maxAge: 30 * 24 * 60 * 3600,
        httpOnly: true,
      })

      return response.json(userData)
    } catch (error) {
      next(error)
    }
  }

  me(request, response, next) {
    try {
      console.log(request.user)
      const user = userRepository.getById(request.user.id)

      return response.json({ alo: 'asdsa' })
    } catch (e) {
      next(e)
    }
  }
}

export const userController = new UserController()
