import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useQuery } from '@tanstack/react-query'

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
}

export const useGetMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async ({ signal }) => {
      const response = await api.request<User>({
        method: 'GET',
        url: RoutesApi.ME,
        signal,
      })

      return response.data
    },
  })
}
