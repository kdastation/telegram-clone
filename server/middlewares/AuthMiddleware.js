import { ApiError } from '../exceptions/ApiError.js'

export const AuthMiddleware = (request, response, next) => {
  try {
    console.log(request)
    const token = '1'

    console.log(token, 'token epta blya')

    if (!token) {
      return next(ApiError.UnauthorizedError())
    }

    request.user = token
    next()
  } catch (error) {
    console.log('token epta blya')
    next(ApiError.UnauthorizedError())
  }
}
