import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLogout } from '@features/Session/Logout'

import { api } from '@shared/api/api'
import { RoutesApi } from '@shared/consts/RoutesApi'

export const useApplyAppInterceptors = () => {
  const navigation = useNavigate()
  const logout = useLogout()

  useEffect(() => {
    api.getInstance().interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error?.response?.status === 401) {
          logout()
          navigation(RoutesApi.LOGIN, { replace: true })
        }

        throw error
      }
    )
  }, [navigation, logout])
}
