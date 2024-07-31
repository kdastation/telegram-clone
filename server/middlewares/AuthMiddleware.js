import { ApiError } from '../exceptions/ApiError.js'

export const AuthMiddleware = (request, response, next) => {
  try {
    const token = request.headers.authorization

    console.log(token, 'token')

    if (!token) {
      return next(ApiError.UnauthorizedError())
    }

    console.log(token, 'pizdec?')

    request.user = {
      id: token,
    }

    next()
  } catch (error) {
    next(ApiError.UnauthorizedError())
  }
}
