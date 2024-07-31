import { userService } from '../services/UserService.js'

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
}

export const userController = new UserController()
