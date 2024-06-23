import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Settings",
      path: "/settings",
    },
  ]

  return <header className="p-4">
    <div className="flex items-center gap-2">
      {menu.map((item, index) =>
        <Link key={index} to={item.path}>
          {item.title}
        </Link>
      )}
    </div>
  </header>
}