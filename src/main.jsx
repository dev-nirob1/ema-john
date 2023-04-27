import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/LogIn/Login';
import cartProductsLoader from './cartProductsLoader/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Shop></Shop>

      },
      {
        path: "/order",
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
