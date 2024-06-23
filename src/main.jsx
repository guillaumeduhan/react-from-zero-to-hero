import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
// import SatoshiLayout from './layouts/SatoshiLayout';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/routes/Home';
import Notfound from '@/routes/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }, {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
