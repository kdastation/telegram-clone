import express from 'express'
import cors from 'cors'
import http from 'http'
import { faker } from '@faker-js/faker'
const router = express.Router()
import { Server } from 'socket.io'
import { userController } from './controllers/UserContoller.js'
import { ErrorMiddleware } from './middlewares/ErrorMiddleware.js'
import { AuthMiddleware } from './middlewares/AuthMiddleware.js'

import cookieParser from 'cookie-parser'
import { dialogController } from './controllers/DialogController.js'
import { dialogRepository } from './repositories/DialogRepository.js'

const messages = [
  {
    id: '1',
    dialogId: '1',
    text: 'Privet',
    user: '1',
  },
]

router.get('/messages/:id', (req, res) => {
  const id = req.params.id

  return res.json({ results: messages })
})

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(ErrorMiddleware)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  const clientId = socket.handshake.auth.clientId

  socket.join(clientId)
})

server.listen(5000, () => {
  console.log('Server running on port 5000.')
})

router.post('/messages', AuthMiddleware, (req, res) => {
  const body = req.body

  const newMessage = {
    id: faker.string.uuid(),
    dialogId: body.dialogId,
    text: body.text,
    user: req.user.id,
  }

  messages.push(newMessage)

  const dialog = dialogRepository.getById(body.dialogId)

  if (dialog) {
    io.to(dialog.author).emit('new-message', newMessage)
    io.to(dialog.partner).emit('new-message', newMessage)
  }

  return res.json({ status: 'ok', data: newMessage })
})

router.post('/login', userController.login)
router.get('/dialogs', AuthMiddleware, dialogController.getAll)
