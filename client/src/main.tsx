import React from 'react'
import ReactDOM from 'react-dom/client'

import { RootProvider } from '@app/RootProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
)
