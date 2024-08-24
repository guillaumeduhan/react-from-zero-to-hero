import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Secret from "./components/Secret";
import { AppWrapper } from "./context";
import MainLayout from "./layouts/Main";
import Form from "./routes/Form";
import Home from "./routes/Home";
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "search",
        element: <Search />
      }, {
        path: "form",
        element: <Form />
      }, {
        path: "secret",
        element: <Secret />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </React.StrictMode>
);
