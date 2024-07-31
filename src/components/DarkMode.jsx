"use client"

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  const [value, setValue, remove] = useLocalStorage('dark-mode');

  useEffect(() => {
    if (value) setDark(value);
  }, [value]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
    localStorage.setItem('dark-mode', dark);
  }, [dark]);

  return (
    <div className="cursor-pointer" onClick={() => setDark(!dark)}>
      {dark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </div>
  );
}