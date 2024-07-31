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

type Props = {
  dialogId: string
}

export const Messages = ({ dialogId }: Props) => {
  useSocketMessages()
  const { data } = useGetMessages(dialogId)

  const messages = data?.results || []

  return (
    <div>
      {messages.map((message) => {
        return (
          <div>
            {message.text}
            {message.user}
          </div>
        )
      })}
    </div>
  )
}
