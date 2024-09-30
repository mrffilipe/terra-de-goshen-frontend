import { Outlet, RouteObject } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import CustomersPage from "../pages/DashboardPage/CustomersPage";
import DebtsPage from "../pages/DashboardPage/CustomersPage/DebtsPage";
import ProductsPage from "../pages/DashboardPage/ProductsPage";
import ProductEditorPage from "../pages/DashboardPage/ProductsPage/ProductEditorPage";

const adminPrivateRoutes: RouteObject = {
    path: '/dashboard',
    element: (
        // componente para verificar (autenticado ? se sim, componente; se nao, redireciona para login ou pagina inicial)
        <Outlet />
    ),
    children: [
        {
            index: true,
            element: <DashboardPage />
        },
        {
            path: '/dashboard/customers',
            element: <CustomersPage />
        },
        {
            path: '/dashboard/customers/:customerId/debts',
            element: <DebtsPage />
        },
        {
            path: '/dashboard/products',
            element: <ProductsPage />
        },
        {
            path: '/dashboard/products/editor/:productId?',
            element: <ProductEditorPage />
        }
    ]
};

export default adminPrivateRoutes;