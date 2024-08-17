import React from "react";
import config from '../config.json';
import { useAppContext } from "../context";
import Social from "./Social";

export default function Hero() {
  const {
    name,
    position,
    description,
    city,
    verified
  } = config;

  const { user } = useAppContext();

  return <div className="grid gap-4 text-left">
    <div className="w-20 h-20 overflow-hidden rounded-full">
      <img src="./avatar.png" alt="john" />
    </div>
    <div className='grid gap-1'>
      <h1 className='font-[600] text-xl flex gap-1'>
        <span>{name}</span>
        {verified && <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="skyblue" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" /></svg>}
      </h1>
      <p className='font-[500]'>{position}, {city}</p>
      <p>{user?.username}</p>
      <p className='text-wrap'>{description}</p>
    </div>
    <Social />
  </div>
}