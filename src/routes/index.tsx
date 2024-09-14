import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import { Outlet } from "react-router-dom";
import adminPrivateRoutes from './adminPrivateRoutes';
import publicRoutes from './publicRoutes';

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
    }
]);

export default router;