import express from 'express'
import cors from 'cors'
import http from 'http'
import { faker } from '@faker-js/faker'
const router = express.Router()
import { Server } from 'socket.io'
import { userController } from './controllers/UserContoller.js'
import { ErrorMiddleware } from './middlewares/ErrorMiddleware.js'
import { AuthMiddleware } from './middlewares/AuthMiddleware.js'

const createDialog = (id) => {
  return {
    id: id,
    receiver: {
      id: '1',
      name: `John ${id}`,
    },
    sender: {
      id: '2',
      name: `Tom ${id}`,
    },
  }
}

const dialogs = [createDialog('1')]

class DialogRepository {
  getById(id) {
    return dialogs.find((dialog) => dialog.id === id)
  }
}

const dialogRepository = new DialogRepository()

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

router.get('/dialogs', AuthMiddleware, (req, res) => {
  return res.json({ results: dialogs })
})

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
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
    user: '1',
  }

  messages.push(newMessage)

  const dialog = dialogRepository.getById(body.dialogId)

  if (dialog) {
    io.to(dialog.receiver.id).emit('new-message', newMessage)
    io.to(dialog.sender.id).emit('new-message', newMessage)
  }

  return res.json({ status: 'ok', data: newMessage })
})

router.post('/login', userController.login)
