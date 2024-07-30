import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'

import { MainPage } from '@pages/Main'

export const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
])
