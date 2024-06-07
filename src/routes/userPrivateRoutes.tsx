import { Outlet, RouteObject } from "react-router-dom";

import Layout from "../pages/Layout";
import RootPage from "../pages";
import SearchPage from "../pages/SearchPage";

const userPrivateRoutes: RouteObject = {
    path: '/',
    element: (
        <Layout>
            <Outlet />
        </Layout>
    ),
    children: [
        {
            index: true,
            element: <RootPage />
        },
        {
            path: 'search',
            element: <SearchPage />
        }
    ]
};

export default userPrivateRoutes;