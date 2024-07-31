import { useState } from 'react'

import { Chat } from '@features/Chat'
import { ListDialogs } from '@features/Dialog/List'

export const MainPage = () => {
  const [selectedDialog, setSelectedDialog] = useState<string | null>(null)

  return (
    <div>
      <ListDialogs onSelect={(id) => setSelectedDialog(id)} />

      {selectedDialog && <Chat dialogId={selectedDialog} />}
    </div>
  )
}
