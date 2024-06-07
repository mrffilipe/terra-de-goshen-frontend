import { Outlet, RouteObject } from "react-router-dom";

import Layout from "../pages/Layout";
import StockPage from "../pages/DashboardPage/StockPage";
import ManageProductPage from "../pages/DashboardPage/ManageProductPage";

const adminPrivateRoutes: RouteObject = {
    path: 'dashboard',
    element: (
        <Layout>
            <Outlet />
        </Layout>
    ),
    children: [
        {
            index: true,
            element: <h1>Olá mundo</h1>
        },
        {
            path: 'stock',
            element: <StockPage />
        },
        {
            path: 'manage-product',
            element: <ManageProductPage />
        }
    ]
};

export default adminPrivateRoutes;