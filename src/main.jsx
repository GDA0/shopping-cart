import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './components/routes/Root'
import { ErrorPage } from './components/ErrorPage'
import { Shop } from './components/routes/Shop'
import { Index } from './components/Index'
import { Cart } from './components/routes/Cart'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
