'use client';
import List from '@/components/List';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import config from '../config.json';

export default function HamburgerComponent() {
  const [isOpen, setOpen] = useState(false);
  const {
    links
  } = config;

  return <div className="z-50">
    <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
    {isOpen && <div className="fixed absolute top-0 left-0 w-screen h-screen p-4 text-black bg-white dark:bg-slate-900 dark:text-white">
      <header className="flex items-center justify-end">
        <Hamburger className="fixed z-[500]" toggled={isOpen} toggle={setOpen} />
      </header>
      <main className="flex items-center justify-center h-screen text-4xl text-center">
        <List list={links} />
      </main>
    </div>}
  </div>;
}