import { RouteObject } from "react-router-dom";

import IndexPage from "../pages";
import SignInPage from "../pages/AuthPage/SignInPage";

const publicRoutes: RouteObject = {
    path: '/',
    element: <IndexPage />,
    children: [
        {
            path: 'auth',
            children: [
                {
                    index: true,
                    element: <SignInPage />
                }
            ]
        }
    ]
};

export default publicRoutes;