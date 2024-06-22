"use client"
import { useEffect } from "react";
import { Moon, Sun } from "./Icons";

export function DarkMode({ dark, setDark }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [dark]);

  return (
    <div className="cursor-pointer" onClick={() => setDark(!dark)}>
      {dark ? <Sun /> : <Moon />}
    </div>
  );
}
