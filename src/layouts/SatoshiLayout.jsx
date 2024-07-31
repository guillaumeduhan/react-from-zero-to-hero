import { Outlet, Link } from "react-router-dom";
import "../satoshi.css";

import Hero from "../components/Hero";
export default function SatoshiLayout() {
  // javascript
  return <div className="w-full grid gap-4 px-4 w-full max-w-[600px] mx-auto">
    <header>
      <Link to="secret">Access secret room</Link>
    </header>
    <Hero />
    <Outlet />
  </div>;
}