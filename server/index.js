import express from 'express'
import cors from 'cors'
import http from 'http'
import { faker } from '@faker-js/faker'
const router = express.Router()

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

router.get('/dialogs', (req, res) => {
  return res.json({ results: [createDialog('1')] })
})

router.post('/messages', (req, res) => {
  const body = req.body

  const newMessage = {
    id: faker.string.uuid(),
    dialogId: body.dialogId,
    text: body.text,
    user: '1',
  }

  return res.json({ status: 'ok', data: newMessage })
})

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use('/api', router)

const server = http.createServer(app)

app.listen(5000, () => {
  console.log('Server running on port 5000.')
})
