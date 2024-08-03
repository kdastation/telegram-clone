import { QueryClientProvider } from './providers/QueryClientProvider'
import { RouterProvider } from './providers/RouterProvider'

import './styles/index.scss'

export const RootProvider = () => {
  return (
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  )
}
