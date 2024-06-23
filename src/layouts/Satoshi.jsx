import Hero from "@/components/Hero";
import "@/satoshi.css";
import { Outlet } from "react-router-dom";

export default function SatoshiLayout() {
  return <div className="w-full grid gap-4 px-4 w-full max-w-[600px] mx-auto">
    <Hero />
    <Outlet />
  </div>;
}