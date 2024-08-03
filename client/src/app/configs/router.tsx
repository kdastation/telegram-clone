import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'

import { AuthPage } from '@pages/Auth'
import { MainPage } from '@pages/Main'

import { PrivateRoute } from '../components/PrivateRoute'
import { AppLoader } from '../loaders/AppLoader'
import { PrivateProvider } from '../providers/PrivateProvider'

export const router = createBrowserRouter([
  {
    element: (
      <AppLoader>
        <div
          style={{
            height: '100vh',
          }}
        >
          <Outlet />
        </div>
      </AppLoader>
    ),
    children: [
      {
        element: (
          <PrivateProvider>
            <Outlet />
          </PrivateProvider>
        ),
        children: [
          {
            path: '/',
            element: (
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  { path: '/login', element: <AuthPage /> },
  {
    path: '*',
    loader: () => redirect('/'),
  },
])
