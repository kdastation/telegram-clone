import { useDeleteMessage } from '../api/useDeleteMessage'

type Props = {
  id: string
}

export const DeleteMessage = ({ id }: Props) => {
  const { mutateAsync: deleteMessage } = useDeleteMessage()

  const handleDeleteMessage = async () => {
    try {
      await deleteMessage(id)
    } catch (e) {
      console.error(e)
    }
  }

  return <div onClick={handleDeleteMessage}>Удалить</div>
}
