import App from '../App'
import { createBrowserRouter} from 'react-router-dom'
import React from 'react'
import { Login, SignUp, SignUpSuccess} from '../pages'

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/login", element: <Login/>},
    {path: "/signup", element: <SignUp/>},
    {path: "/successful", element: < SignUpSuccess/>}
])

    