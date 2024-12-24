import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const AllProducts = lazy(() => import('../pages/AllProducts'));
const Cart = lazy(() => import('../pages/Cart'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/all-products',
                element: <AllProducts />,
            },
            {
                path: '/cart',
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
            },
            {
                path: '/login',
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                ),
            },
            {
                path: '/register',
                element: (
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                ),
            },
        ],
    },
]);

export default router;
