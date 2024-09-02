import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './Pages/Menu.jsx';
import AddFood from './component/Add Food/AddFood.jsx';
import MenuView from './component/MenuView/Menuview.jsx';
import Cart from './component/Cart/Cart.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/menu',
        element: <Menu></Menu>
      },
      {
        path:'/menu/:id',
        element: <MenuView></MenuView>
      },
      {
        path:'/add',
        element: <AddFood></AddFood>
      },
      {
        path:'/cart',
        element: <Cart></Cart>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>

  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
