import { QueryClientProvider } from './providers/QueryClientProvider'
import { RouterProvider } from './providers/RouterProvider'

export const RootProvider = () => {
  return (
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  )
}
