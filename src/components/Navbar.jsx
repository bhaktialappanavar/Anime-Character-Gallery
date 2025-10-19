import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ query, setQuery, onSearch }) {
  return (
    <nav className="bg-black/50 backdrop-blur-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Anime Character Gallery</Link>
      <form onSubmit={onSearch} className="flex gap-2">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="px-2 py-1 rounded text-black" />
        <button type="submit" className="px-3 py-1 bg-pink-500 rounded text-white">Search</button>
      </form>
      <Link to="/favorites" className="px-3 py-1 bg-white/10 rounded">Favorites</Link>
    </nav>
  )
}