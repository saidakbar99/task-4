import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './routes/Dashboard'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Store from './store/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'react-toastify/dist/ReactToastify.css'
import "./style.css"

const store = new Store()
export const Context = createContext({ store })

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/sign_in',
        element: <SignIn />
    },
    {
        path: '/sign_up',
        element: <SignUp />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{store}}>
        <RouterProvider router={router} />
    </Context.Provider>
)
