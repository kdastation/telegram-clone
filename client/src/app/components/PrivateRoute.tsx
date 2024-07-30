import { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useIsAuth } from '@entities/Session'

type Props = {
  children: ReactElement
}

export const PrivateRoute = ({ children }: Props) => {
  const isAuth = useIsAuth()

  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }

  return children
}
