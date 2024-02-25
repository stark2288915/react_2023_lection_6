import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, MainLayout, PublicLayout} from "./layouts";
import {LoginPage} from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CarsPage from "./pages/CarsPage";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>
                    },
                    {
                        path: 'register', element: <RegisterPage/>
                    }
                ]
            },
            {
                element: <AuthLayout/>, children: [
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]}
])

export {router}