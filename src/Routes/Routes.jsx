import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Allservices from "../Pages/Services/Allservices";
import Checkout from "../Pages/Checkout/Checkout";
import BookService from "../Pages/Services/BookService/BookService";
import MyBookings from "../Pages/Services/BookService/MyBookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/allservices',
          element: <Allservices></Allservices>
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoutes> <Checkout></Checkout> </PrivateRoutes> ,
          loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
        },
        {
          path: '/myBookings',
          element: <PrivateRoutes> <MyBookings></MyBookings> </PrivateRoutes>,
        },
        // {
        //   path: 'book/:id',
        //   element: <BookService></BookService>,
        //   loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
        // }
      ]
    },
  ]);

  export default router