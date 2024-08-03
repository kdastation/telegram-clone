import { useState } from 'react'

import { Chat } from '@features/Chat'
import { ListDialogs } from '@features/Dialog/List'

import { Flex } from '@shared/ui/Flex'

export const MainPage = () => {
  const [selectedDialog, setSelectedDialog] = useState<string | null>(null)

  return (
    <Flex fullHeight align='start'>
      <div style={{ width: '400px', borderRight: '1px solid var(--color-borders)' }}>
        <ListDialogs onSelect={(id) => setSelectedDialog(id)} />
      </div>

      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        {selectedDialog && <Chat dialogId={selectedDialog} />}
      </div>
    </Flex>
  )
}
