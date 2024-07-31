import { CreateMessage } from '../packages/CreateMessage'
import { Messages } from '../packages/Messages'

type Props = {
  dialogId: string
}

export const Chat = ({ dialogId }: Props) => {
  return (
    <div>
      <Messages dialogId={dialogId} />
      <CreateMessage dialogId={dialogId} />
    </div>
  )
}
