import { dialogRepository } from '../repositories/DialogRepository.js'

class DialogController {
  getAll(request, response, next) {
    const dialogsUser = dialogRepository.getAllByUser(request.user.id)

    return response.json({ results: dialogsUser })
  }
}

export const dialogController = new DialogController()
