import { createBrowserRouter } from 'react-router-dom';

import adminPrivateRoutes from './adminPrivateRoutes';
import publicRoutes from './publicRoutes';
import userPrivateRoutes from './userPrivateRoutes';

const router = createBrowserRouter([
    adminPrivateRoutes,
    publicRoutes,
    userPrivateRoutes
]);

export default router;