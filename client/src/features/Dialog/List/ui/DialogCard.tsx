import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Avatar } from '@shared/ui/Avatar'
import { Flex } from '@shared/ui/Flex'
import { Text } from '@shared/ui/Typography/Text'

type Props = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title: string
  lastMessage: string
}

export const DialogCard = forwardRef<HTMLDivElement, Props>(
  ({ title, lastMessage, ...props }, ref) => {
    return (
      <Flex fullWidth gap={8} {...props} ref={ref}>
        <Avatar />
        <Flex align={'start'} fullWidth direction='column' gap={4}>
          <Text size={3}>{title}</Text>
          <Text size={1} color={'var(--color-text-secondary)'}>
            {lastMessage}
          </Text>
        </Flex>
      </Flex>
    )
  }
)
