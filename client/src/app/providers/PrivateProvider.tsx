import { ReactNode } from 'react'

import { useGetUserId } from '@entities/Session'

import { SocketProvider } from '@shared/lib/socket'

type Props = {
  children?: ReactNode
}

export const PrivateProvider = ({ children }: Props) => {
  const userId = useGetUserId()

  return <SocketProvider clientId={userId || ''}>{children}</SocketProvider>
}
