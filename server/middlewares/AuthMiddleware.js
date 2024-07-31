import { ApiError } from '../exceptions/ApiError.js'

export const AuthMiddleware = (request, response, next) => {
  try {
    const token = request.headers.authorization

    if (!token) {
      return next(ApiError.UnauthorizedError())
    }

    request.user = {
      id: token,
    }

    next()
  } catch (error) {
    next(ApiError.UnauthorizedError())
  }
}
