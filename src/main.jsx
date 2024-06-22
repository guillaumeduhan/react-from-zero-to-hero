import Header from "@/components/Header";
import Home from "@/routes/Home";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full grid gap-4 px-4 w-full max-w-[1000px] mx-auto">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);