import { createBrowserRouter } from 'react-router-dom';

import { Outlet } from "react-router-dom";

import Layout from '../components/Layout';
import adminPrivateRoutes from './adminPrivateRoutes';
import publicRoutes from './publicRoutes';
import SignInPage from '../pages/AuthPage/SignInPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            publicRoutes,
            adminPrivateRoutes
        ]
    },
    {
        path: '/auth',
        element: <SignInPage />
    }
]);

export default router;