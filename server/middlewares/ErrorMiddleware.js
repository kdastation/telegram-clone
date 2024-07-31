import { ApiError } from '../exceptions/ApiError.js'

export const ErrorMiddleware = (error, request, response, next) => {
  if (error instanceof ApiError) {
    console.log(error.status, 'status', error.message)
    return response.status(error.status).json({ message: error.message, errors: error.errors })
  }
  return response.status(500).json({ message: 'Что то пошло не так...' })
}
