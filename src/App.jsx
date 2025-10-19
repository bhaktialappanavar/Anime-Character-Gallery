import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import { getCharacters, searchCharacters, getCharacterById } from './api';
import { motion } from 'framer-motion';

export default function App() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favChars') || '[]'));

  useEffect(() => { fetchChars(); }, []);

  const fetchChars = async () => {
    setLoading(true);
    const data = await getCharacters();
    setChars(data);
    setLoading(false);
  }

  const handleSearch = async e => {
    e.preventDefault();
    if (!query) return fetchChars();
    setLoading(true);
    const data = await searchCharacters(query);
    setChars(data);
    setLoading(false);
  }

  const toggleFavorite = char => {
    const exists = favorites.find(f => f.mal_id === char.mal_id);
    let updated;
    if (exists) updated = favorites.filter(f => f.mal_id !== char.mal_id);
    else updated = [...favorites, { mal_id: char.mal_id, name: char.name, image_url: char.images.jpg.image_url }];
    setFavorites(updated);
    localStorage.setItem('favChars', JSON.stringify(updated));
  }

  const openDetails = async id => {
    const data = await getCharacterById(id);
    setSelected(data);
  }

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <main className="p-6">
        {loading ? <p>Loading...</p> :
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {chars.map(c => <CharacterCard key={c.mal_id} character={c} onOpen={() => openDetails(c.mal_id)} onToggleFav={() => toggleFavorite(c)} isFav={favorites.some(f => f.mal_id === c.mal_id)} />)}
          </motion.div>
        }
      </main>
      {selected && <CharacterModal character={selected} onClose={() => setSelected(null)} onToggleFav={() => toggleFavorite(selected)} isFav={favorites.some(f => f.mal_id === selected.mal_id)} />}
    </div>
  );
}