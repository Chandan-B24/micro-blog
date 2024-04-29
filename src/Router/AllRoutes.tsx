import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Auth from "../pages/Auth/Auth"
import CreatePage from "../pages/PageCreation/CreatePage"


const AllRoutes = () => {


    const router = createBrowserRouter([
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/auth',
            element : <Auth/>
        },
        {
            path : '/create',
            element : <CreatePage/>
        }
    ])


  return (
    <RouterProvider router={router} />


   
  )
}

export default AllRoutes