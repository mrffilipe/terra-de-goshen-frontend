import { Outlet, RouteObject } from "react-router-dom";

import StockPage from "../pages/DashBoardPage/StockPage";
import ManageProductPage from "../pages/DashBoardPage/ManageProductPage";

const adminPrivateRoutes: RouteObject = {
    path: 'dashboard',
    element: (
        // componente para verificar (autenticado ? se sim, componente; se nao, redireciona para login ou pagina inicial)
        <Outlet />
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
            path: 'manage-product/:productId?',
            element: <ManageProductPage />
        }
    ]
};

export default adminPrivateRoutes;