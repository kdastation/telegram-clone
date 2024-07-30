import { useStore } from '../model/store'

export const useSetUserId = () => {
  return useStore((state) => state.setUserId)
}
