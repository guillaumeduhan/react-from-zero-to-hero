import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.css';
import Home from "./routes/Home";
import Notfound from './routes/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
