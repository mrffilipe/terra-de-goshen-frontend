import { Outlet, RouteObject } from "react-router-dom";

import IndexPage from "../pages";
import CatalogPage from "../pages/CatalogPage";

const publicRoutes: RouteObject = {
    path: '/',
    element: (
        <Outlet />
    ),
    children: [
        {
            index: true,
            element: <IndexPage />
        },
        {
            path: '/catalog/:productId?',
            element: <CatalogPage />
        }
    ]
};

export default publicRoutes;