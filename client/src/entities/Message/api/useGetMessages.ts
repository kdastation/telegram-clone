import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useQuery } from '@tanstack/react-query'

const baseKey = ['messages']

export type Message = {
  text: string
  id: string
  user: string
  dialogId: string
}

export type Response = {
  results: Message[]
}

export const useGetMessages = (dialogId: string) => {
  return useQuery({
    queryKey: [...baseKey, dialogId],
    queryFn: async ({ signal }) => {
      const response = await api.request<Response>({
        method: 'GET',
        url: RoutesApi.MESSAGES(dialogId),
        signal,
      })

      return response.data
    },
  })
}
