import { CreateMessage } from '@features/Chat/CreateMessage'
import { ListDialogs } from '@features/Dialog/List'

import { Message, Response, useGetMessages } from '@entities/Message'

import { useSocketHandler } from '@shared/lib/socket'

import { useQueryClient } from '@tanstack/react-query'

const useSocketMessages = () => {
  const queryClient = useQueryClient()
  useSocketHandler('new-message', async (newMessage: Message) => {
    queryClient.setQueriesData<Response>(
      {
        queryKey: ['messages', newMessage.dialogId],
      },
      (data) => {
        if (!data) {
          return
        }

        return {
          results: [...data.results, newMessage],
        }
      }
    )
  })
}

export const MainPage = () => {
  useSocketMessages()
  const { data } = useGetMessages('1')
  //eslint-disable-next-line
  console.log('messages', data)

  const messages = data?.results || []

  return (
    <div>
      <ListDialogs onSelect={() => {}} />
      {messages.map((message) => {
        return (
          <div>
            {message.text}
            {message.user}
          </div>
        )
      })}
      <CreateMessage dialogId={'1'} />
    </div>
  )
}
