import { useGetDialogs } from '@entities/Dialog'

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
        return <div onClick={() => onSelect(dialog.id)}>{dialog.id}</div>
      })}
    </div>
  )
}
