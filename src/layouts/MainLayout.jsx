import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../index.css";

export default function MainLayout() {
  return <div className="w-full grid gap-4 px-4 w-full max-w-[1000px] mx-auto">
    <Header />
    <Hero />
    <Outlet />
  </div>;
}