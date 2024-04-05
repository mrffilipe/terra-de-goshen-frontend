import './index.css'
import './fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './pages/App'
import ProductPage from './pages/ProductPage'
import StockPage from './pages/StockPage'
import Header from './components/Header'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductPage />
  },
  {
    path: '/stock',
    element: <StockPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
)
