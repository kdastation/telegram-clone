import { Server } from 'socket.io'

export const createSocket = (server) => {
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

  return io
}
