import { CreateMessage } from '@features/Chat/CreateMessage'

export const MainPage = () => {
  return (
    <div>
      main page
      <CreateMessage dialogId={'1'} />
    </div>
  )
}
