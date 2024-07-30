import { SocketProvider } from '@shared/lib/socket'

import { QueryClientProvider } from './providers/QueryClientProvider'
import { RouterProvider } from './providers/RouterProvider'

export const RootProvider = () => {
  return (
    <QueryClientProvider>
      <SocketProvider clientId={'1'}>
        <RouterProvider />
      </SocketProvider>
    </QueryClientProvider>
  )
}
