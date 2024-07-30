import { ReactNode } from 'react'

import { SocketProvider } from '@shared/lib/socket'

type Props = {
  children?: ReactNode
}

export const PrivateProvider = ({ children }: Props) => {
  return <SocketProvider clientId={'1'}>{children}</SocketProvider>
}
