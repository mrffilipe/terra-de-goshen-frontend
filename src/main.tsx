import './index.css'
import './fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import ProductPage from './pages/ProductPage'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main>
      <ProductPage />
    </main>
    <Footer />
  </React.StrictMode>
)
