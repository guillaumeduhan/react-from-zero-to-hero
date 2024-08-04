import React, { useEffect, useState } from 'react';

function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search items..."
    />
  );
}

function List({ items }) {
  if (items.length === 0) return <div>No result.</div>
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [items, setItems] = useState([
    "Understanding React useEffect",
    "JavaScript ES6 Features",
    "Introduction to TypeScript",
    "CSS Grid Layout",
    "Node.js Crash Course",
  ]);

  useEffect(() => {
    setFiltered(
      items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  return (
    <div className="flex flex-col gap-2 py-8">
      <Search search={search} setSearch={setSearch} />
      <List items={filtered} />
    </div>
  );
}
