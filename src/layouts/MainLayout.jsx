import { Outlet } from "react-router-dom";
import "../index.css";

import Hero from "../components/Hero";
export default function MainLayout() {
  return <div className="w-full grid gap-4 px-4 w-full max-w-[1000px] mx-auto">
    <Hero />
    <Outlet />
  </div>;
}