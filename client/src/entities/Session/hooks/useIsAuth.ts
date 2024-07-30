import { useStore } from '../model/store'

export const useIsAuth = () => {
  const userId = useStore((state) => state.userId)

  return Boolean(userId)
}
