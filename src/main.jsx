import Header from "@/components/Header";
import Home from "@/routes/Home";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Post from "./routes/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/:slug",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full grid gap-4 px-4 w-full max-w-[1000px] mx-auto">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);