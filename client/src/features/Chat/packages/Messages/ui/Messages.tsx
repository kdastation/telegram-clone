import { ReactNode } from 'react'

import { Message, Response, useGetMessages } from '@entities/Message'
import { useGetUserId } from '@entities/Session'

import { useSocketHandler } from '@shared/lib/socket'
import { Flex } from '@shared/ui/Flex'

import { useQueryClient } from '@tanstack/react-query'

import { MessageCard } from './MessageCard/MessageCard'

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

  const userId = useGetUserId()

  const messages = data?.results || []

  return (
    <Flex
      style={{
        padding: '16px',
      }}
      align={'end'}
      direction='column'
      gap={4}
      fullWidth
      fullHeight
    >
      {messages.map((message) => {
        const isOwnMesage = userId === message.user
        return (
          <div
            style={{
              alignSelf: isOwnMesage ? 'end' : 'start',
            }}
          >
            <MessageCard
              variant={isOwnMesage ? 'primary' : 'secondary'}
              text={`${message.text} ${message.user}`}
            />
          </div>
        )
      })}
    </Flex>
  )
}
