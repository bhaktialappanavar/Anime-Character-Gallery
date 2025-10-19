import React from 'react';
import { motion } from 'framer-motion';

export default function CharacterCard({ character, onOpen, onToggleFav, isFav }) {
  const img = character.images?.jpg?.image_url || '';
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-2 shadow-md">
      <img src={img} alt={character.name} className="w-full h-48 object-cover rounded-lg cursor-pointer" onClick={onOpen} />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-sm font-semibold">{character.name}</h3>
        <button onClick={onToggleFav}>{isFav ? '❤️' : '🤍'}</button>
      </div>
    </motion.div>
  );
}