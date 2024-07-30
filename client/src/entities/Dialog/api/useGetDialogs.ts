import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useQuery } from '@tanstack/react-query'

const baseKey = 'dialog'

type Dialog = {
  id: string
}

type Response = {
  results: Dialog[]
}

export const useGetDialogs = () => {
  return useQuery({
    queryKey: [...baseKey],
    queryFn: async ({ signal }) => {
      const response = await api.request<Response>({
        method: 'GET',
        url: RoutesApi.DIALOGS,
        signal,
      })

      return response.data
    },
  })
}
