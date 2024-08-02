import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useMutation } from '@tanstack/react-query'

export const useDeleteMessage = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      await api.request({
        url: RoutesApi.MESSAGES(id),
        method: 'DELETE',
      })
    },
  })
}
