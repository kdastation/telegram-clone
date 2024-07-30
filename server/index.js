import express from 'express'
import cors from 'cors'
import http from 'http'
const router = express.Router()

const createDialog = (id) => {
  return {
    id: id,
    receiver: {
      id: '1',
      name: `John ${id}`,
    },
  }
}

router.get('/dialogs', (req, res) => {
  return res.json({ results: [createDialog('1'), createDialog('2'), createDialog('3')] })
})

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use('/api', router)

const server = http.createServer(app)

app.listen(5000, () => {
  console.log('Server running on port 5000.')
})
