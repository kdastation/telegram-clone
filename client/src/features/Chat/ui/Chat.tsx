import { Flex } from '@shared/ui/Flex'

import { CreateMessage } from '../packages/CreateMessage'
import { DeleteMessage } from '../packages/DeleteMessage'
import { Messages } from '../packages/Messages'
import { Header } from './Header/Header'

import styles from './Chat.module.scss'

type Props = {
  dialogId: string
}

export const Chat = ({ dialogId }: Props) => {
  return (
    <Flex align='start' fullWidth fullHeight direction='column'>
      <Header />
      <div
        style={{
          flex: '1 0 auto',
          backgroundColor: 'white',
          width: '100%',
        }}
        className={styles.content}
      >
        <Messages renderAddonRightMessage={(id) => <DeleteMessage id={id} />} dialogId={dialogId} />
      </div>

      <div
        style={{
          flex: '0 0 auto',
          height: '56px',
          backgroundColor: 'var(--color-background)',
        }}
      >
        <CreateMessage dialogId={dialogId} />
      </div>
    </Flex>
  )
}
