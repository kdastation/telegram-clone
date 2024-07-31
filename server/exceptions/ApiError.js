export class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользовател не авторизован')
  }

  static BadRequest(message, errors = []) {
    return new ApiError(404, message, errors)
  }
}
