import './index.css'
import './fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import ProductPage from './pages/ProductPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <ProductPage />
    </main>
  </React.StrictMode>
)
