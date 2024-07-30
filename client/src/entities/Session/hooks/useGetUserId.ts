import { useStore } from '../model/store'

export const useGetUserId = () => {
  return useStore((state) => state.userId)
}
