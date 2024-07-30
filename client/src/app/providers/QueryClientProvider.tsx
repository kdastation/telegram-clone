import { ReactNode } from 'react'

import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query'

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export function QueryClientProvider({ children }: Props) {
  return <TanStackQueryClientProvider client={queryClient}>{children}</TanStackQueryClientProvider>
}
