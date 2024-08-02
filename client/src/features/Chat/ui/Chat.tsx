import { CreateMessage } from '../packages/CreateMessage'
import { DeleteMessage } from '../packages/DeleteMessage'
import { Messages } from '../packages/Messages'

type Props = {
  dialogId: string
}

export const Chat = ({ dialogId }: Props) => {
  return (
    <div>
      <Messages renderAddonRightMessage={(id) => <DeleteMessage id={id} />} dialogId={dialogId} />
      <CreateMessage dialogId={dialogId} />
    </div>
  )
}
