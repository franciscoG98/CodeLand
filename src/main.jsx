import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Juegos from './views/juegos/Juegos.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/juegos",
    element: <Juegos />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
