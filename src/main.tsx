import './index.css'
import './fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Layout from './pages/Layout'
import App from './pages/App'
import ProductPage from './pages/ProductPage'
import StockPage from './pages/StockPage'
import SignInPage from './pages/AuthPage/SignInPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout >
    ),
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'products',
        element: <ProductPage />
      },
      {
        path: '/stock',
        element: <StockPage />
      },
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
