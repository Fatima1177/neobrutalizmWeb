import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import PrivateRoute from './PrivateRoute'


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/Products',
        element: <ProductPage/>
    },
    {
        path: '/adminPage',
        element: 
            <PrivateRoute>
                <AdminPage/>
            </PrivateRoute>
    },
    {
        path: '/loginPage',
        element: <LoginPage/>
    }

])