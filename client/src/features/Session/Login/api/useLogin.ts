import { useSetUserId } from '@entities/Session'

import { api } from '@shared/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

import { useMutation } from '@tanstack/react-query'

type Args = {
  email: string
}

type Response = {
  token: string
}

export const useLogin = () => {
  const setUserId = useSetUserId()

  return useMutation({
    mutationFn: async (values: Args) => {
      const result = await api.request<Response>({
        url: RoutesApi.LOGIN,
        data: values,
        method: 'POST',
      })

      return result.data
    },
    onSuccess: (data) => {
      api.setAccessToken(data.token)
      setUserId(data.token)
    },
  })
}
