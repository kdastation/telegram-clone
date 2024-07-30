import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import { useEventCallback } from '../hooks/useEventCallback'
import { createContext } from './react/createContext'

const [SocketContextProvider, useSocket] = createContext<Socket>()
const [IsConnectedContextProvider, useIsConnected] = createContext<boolean>()

export function SocketProvider({
  children,
  clientId,
}: {
  children?: React.ReactNode
  clientId: string
}) {
  const [socket] = useState(() =>
    io('http://localhost:5000', {
      auth: {
        clientId,
      },
      autoConnect: false,
      reconnection: false,
    })
  )

  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    socket.connect()
    return () => {
      socket.disconnect()
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [socket])

  return (
    <IsConnectedContextProvider value={isConnected}>
      <SocketContextProvider value={socket}>{children}</SocketContextProvider>
    </IsConnectedContextProvider>
  )
}

export function useSocketHandler<Arg>(event: string, handler: (arg: Arg) => void) {
  const socket = useSocket()

  const eventHandler = useEventCallback(handler)

  useEffect(() => {
    socket.on(event, eventHandler)

    return () => {
      socket.off(event, eventHandler)
    }
  }, [socket, eventHandler, event])
}

export { useIsConnected }
