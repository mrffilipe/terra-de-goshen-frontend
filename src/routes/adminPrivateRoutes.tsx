import { Outlet, RouteObject } from "react-router-dom";

import DashboardPage from "../pages/DashBoardPage";
import CustomersPage from "../pages/DashBoardPage/CustomersPage";
import DebtsPage from "../pages/DashBoardPage/CustomersPage/DebtsPage";
import ProductsPage from "../pages/DashBoardPage/ProductsPage";
import ProductEditorPage from "../pages/DashBoardPage/ProductsPage/ProductEditorPage";

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