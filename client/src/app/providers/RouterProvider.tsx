import { RouterProvider as RouterProviderRRD } from 'react-router-dom'

import { router } from '../configs/router'

export const RouterProvider = () => {
  return <RouterProviderRRD router={router} />
}
