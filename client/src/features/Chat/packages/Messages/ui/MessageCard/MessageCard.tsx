import classNames from 'classnames'

import { Flex } from '@shared/ui/Flex'
import { Text } from '@shared/ui/Typography/Text'

import styles from './MessageCard.module.scss'

type Variants = 'primary' | 'secondary'

type Props = {
  text: string
  variant?: Variants
}

export const MessageCard = ({ text, variant = 'primary' }: Props) => {
  return (
    <Flex className={classNames(styles.root, styles[variant])} gap={4} align={'center'}>
      <Text>{text}</Text>
      <Flex>
        <Text size={1}>15:47</Text>
      </Flex>
    </Flex>
  )
}
