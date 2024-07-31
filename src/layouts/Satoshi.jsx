import Hero from "@/components/Hero";
import "@/satoshi.css";
import { Link, Outlet } from "react-router-dom";

export default function SatoshiLayout() {
  return <div className="w-full grid gap-4 px-4 w-full max-w-[600px] mx-auto">
    <header>
      <Link to="secret">Access secret room</Link>
    </header>
    <Hero />
    <Outlet />
  </div>;
}