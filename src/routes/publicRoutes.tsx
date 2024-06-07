import { RouteObject } from "react-router-dom";

import SignInPage from "../pages/AuthPage/SignInPage";

const publicRoutes: RouteObject = {
    path: 'auth',
    children: [
        {
            index: true,
            element: <SignInPage />
        }
    ]
};

export default publicRoutes;