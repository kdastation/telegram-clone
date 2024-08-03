import { useGetDialogs } from '@entities/Dialog'

import { DialogCard } from './DialogCard'

type Props = {
  onSelect: (id: string) => void
}

export const ListDialogs = ({ onSelect }: Props) => {
  const { data, isLoading } = useGetDialogs()

  const dialogs = data?.results || []

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div>
      {dialogs.map((dialog) => {
        return (
          <DialogCard
            title={`Диалог ${dialog.id}`}
            lastMessage={'Последние сообщение'}
            onClick={() => onSelect(dialog.id)}
          />
        )
      })}
    </div>
  )
}
