'use client';
import React, { useState } from 'react';

export const Form = ({
  name,
  email,
  error,
  setName,
  setEmail,
  setError,
  handleSubmit
}) => {

  return <form onSubmit={handleSubmit} className="grid gap-2">
    <div className="grid gap-2">
      <label htmlFor="">Your name:</label>
      <input
        className="px-2 py-1 border rounded"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
    </div>
    <div className="grid gap-2">
      <label htmlFor="">Your email:</label>
      <input
        className="px-2 py-1 border rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
    </div>
    {error && error.length > 1 && <div className="px-2 py-1 text-red-500 border border-red-200 rounded bg-red-50">
      {error}
    </div>}
    <div>
      <button type="submit" className="px-4 py-2 text-white bg-black rounded cursor-pointer">Submit</button>
    </div>
  </form>
}

export default function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(undefined);
    if (!name) return setError("Please enter a name.")
    if (!email) return setError("Please enter an email.")
    console.log(name)
    console.log(email)
  }

  return <div>
    <Form {...{
      name,
      email,
      error,
      setName,
      setEmail,
      setError,
      handleSubmit
    }} />
  </div>;
}