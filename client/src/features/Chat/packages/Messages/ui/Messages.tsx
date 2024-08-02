import { ReactNode } from 'react'

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

  useSocketHandler('remove-message', async (deletedMessage: Message) => {
    console.log(deletedMessage)
    queryClient.setQueriesData<Response>(
      {
        queryKey: ['messages', deletedMessage.dialogId],
      },
      (data) => {
        if (!data) {
          return
        }

        return {
          results: data.results.filter((msg) => msg.id !== deletedMessage.id),
        }
      }
    )
  })
}

type Props = {
  dialogId: string
  renderAddonRightMessage?: (messageId: string) => ReactNode
}

export const Messages = ({ dialogId, renderAddonRightMessage }: Props) => {
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
            {renderAddonRightMessage?.(message.id)}
          </div>
        )
      })}
    </div>
  )
}
