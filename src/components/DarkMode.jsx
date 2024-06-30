"use client"

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark-mode');
    if (storedDarkMode) {
      setDark(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);

  return [dark, setDark];
};


export default function DarkMode({ dark, setDark }) {
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
      {dark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </div>
  );
}
