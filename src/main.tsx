import './index.css';
import './fonts.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout';
import App from './pages/App';
import SearchPage from './pages/SearchPage';
import StockPage from './pages/StockPage';
import ManageProductPage from './pages/StockPage/ManageProductPage';
import SignInPage from './pages/Auth/SignInPage';

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
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'stock',
        element: <StockPage />
      },
      {
        path: 'stock/manage-product',
        element: <ManageProductPage />
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);