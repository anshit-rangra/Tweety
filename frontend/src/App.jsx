import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Cookies from 'js-cookie'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const token = Cookies.get('token')
  const routes = createBrowserRouter([
    {
      path: "/",
      element: token ? <Home /> : <Navigate to={"/login"} />
    },
    {
      path: "/login",
      element: token ? <Navigate to={"/"} /> : <Login />
    },
    {
      path: "/registration",
      element: token ? <Navigate to={"/"} /> : <Register />
    }
    
  ])
  return (
    <>
    <ToastContainer />
    <RouterProvider router={routes}>
    </RouterProvider>
    </>
  )
}

export default App
