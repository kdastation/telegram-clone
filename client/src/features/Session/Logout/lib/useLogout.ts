import { useSetUserId } from '@entities/Session'

import { useEventCallback } from '@shared/hooks/useEventCallback'

export const useLogout = () => {
  const setUserId = useSetUserId()

  return useEventCallback(() => {
    setUserId(null)
  })
}
