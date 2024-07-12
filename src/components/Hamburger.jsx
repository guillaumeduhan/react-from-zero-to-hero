'use client';
import List from '@/components/List';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import config from '../config.json';

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  const {
    links
  } = config;


  return <div>
    <Hamburger
      size={24}
      toggled={open}
      toggle={setOpen}
    />
    {open && <div className="fixed absolute top-0 left-0 w-screen h-screen text-black bg-white dark:bg-slate-900 dark:text-white">
      <header className="fixed flex items-center justify-start w-full">
        <Hamburger
          size={24}
          toggled={open}
          toggle={setOpen}
        />
      </header>
      <main className="flex items-center justify-center h-screen text-4xl text-center">
        <List list={links} />
      </main>
    </div>}
  </div>;
}