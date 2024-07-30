import { CreateMessage } from '@features/Chat/CreateMessage'

import { useGetMessages } from '@entities/Message'

import { useSocketHandler } from '@shared/lib/socket'

export const MainPage = () => {
  useSocketHandler('new-message', (message) => {
    //eslint-disable-next-line
    console.log('new message', message)
  })

  const { data } = useGetMessages('1')
  //eslint-disable-next-line
  console.log('messages', data)

  return (
    <div>
      main page
      <CreateMessage dialogId={'1'} />
    </div>
  )
}
