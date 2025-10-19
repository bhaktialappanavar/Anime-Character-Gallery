import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const downloadImage = (url, name) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => alert('Failed to download image'));
};

export default function FavoritesPage() {
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favChars') || '[]'));

  const removeFavorite = (malId) => {
    const updated = favs.filter(f => f.mal_id !== malId);
    setFavs(updated);
    localStorage.setItem('favChars', JSON.stringify(updated));
  };
  return (
    <div className="p-6">
      <Link to="/" className="mb-4 inline-block bg-white/10 px-3 py-1 rounded">Back</Link>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favs.length === 0 ? <p>No favorites yet!</p> :
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {favs.map(f => (
            <div key={f.mal_id} className="bg-white/5 rounded p-2 relative group">
              <img src={f.image_url} alt={f.name} className="w-full h-40 object-cover rounded cursor-pointer" onClick={() => window.open(f.image_url, '_blank')} />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded">
                <button onClick={(e) => { e.stopPropagation(); downloadImage(f.image_url, f.name); }} className="bg-pink-500 text-white px-2 py-1 rounded text-xs">Download</button>
                <button onClick={(e) => { e.stopPropagation(); removeFavorite(f.mal_id); }} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Remove</button>
              </div>
              <h3 className="mt-2 text-sm font-semibold">{f.name}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  )
}