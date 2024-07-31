import { ReactNode } from 'react'

import { useGetMe } from '@entities/Me'

import { useApplyAppInterceptors } from '../hooks/useApplyInterceptors'

type Props = {
  children?: ReactNode
}

export const AppLoader = ({ children }: Props) => {
  useApplyAppInterceptors()

  const { isLoading, isError, error } = useGetMe()

  if (isLoading) {
    return <div>loading..</div>
  }

  if (isError) {
    const getErrorMessage = (e: unknown) => {
      if (e instanceof Error) {
        return e.message
      }

      return 'Unknown error'
    }

    return (
      <div>
        <div>Произошла ошибка</div>
        <div>Message: {getErrorMessage(error)}</div>
      </div>
    )
  }

  return <>{children}</>
}
