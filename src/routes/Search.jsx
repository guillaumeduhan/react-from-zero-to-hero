'use client';
import React, { useState } from 'react';

function Search({ search, setSearch }) {
  return <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="px-2 py-1 border rounded"
  />
};

function List({ items }) {
  if (items.length === 0) return <div>No result.</div>
  return <ul className="flex flex-col gap-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
};

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([
    "Understanding React useEffect",
    "JavaScript ES6 Features",
    "Introduction to TypeScript",
    "CSS Grid Layout",
    "Node.js Crash Course",
  ]);

  return <div>
    <Search {...{ search, setSearch }} />
    <List {...{ items: search ? items.filter((item) => item.toLowerCase().includes(search.toLowerCase())) : items }} />
  </div>;
}