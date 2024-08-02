import express from 'express'
import cors from 'cors'
import http from 'http'
const router = express.Router()
import { ErrorMiddleware } from './middlewares/ErrorMiddleware.js'

import cookieParser from 'cookie-parser'

import { createSocket } from './core/socket.js'
import { createRoutes } from './core/createRoutes.js'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(ErrorMiddleware)

const server = http.createServer(app)

const io = createSocket(server)

createRoutes(router, io)

server.listen(5000, () => {
  console.log('Server running on port 5000.')
})
