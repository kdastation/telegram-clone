import { useCreateMessage } from '../api/useCreateMessage'
import { Form } from './Form'

type Props = {
  dialogId: string
}

export const CreateMessage = ({ dialogId }: Props) => {
  const { mutateAsync: createMessage } = useCreateMessage()

  const handleCreateMessage = async (text: string) => {
    try {
      await createMessage({ dialogId, text })
    } catch (e) {
      console.error(e)
    }
  }

  return <Form onSubmit={handleCreateMessage} />
}
