import { CreateMessage } from '@features/Chat/CreateMessage'

import { useSocketHandler } from '@shared/lib/socket'

export const MainPage = () => {
  useSocketHandler('new-message', (message) => {
    //eslint-disable-next-line
    console.log('new message', message)
  })

  return (
    <div>
      main page
      <CreateMessage dialogId={'1'} />
    </div>
  )
}
