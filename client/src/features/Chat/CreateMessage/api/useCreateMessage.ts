import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useMutation } from '@tanstack/react-query'

type Args = {
  dialogId: string
  text: string
}

export const useCreateMessage = () => {
  return useMutation({
    mutationFn: async (values: Args) => {
      await api.request({
        url: RoutesApi.CREATE_MESSAGE,
        method: 'POST',
        data: values,
      })
    },
  })
}
