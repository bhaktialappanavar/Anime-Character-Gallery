import React from 'react';
import { motion } from 'framer-motion';

export default function CharacterModal({ character, onClose, onToggleFav, isFav }) {
  const img = character.images?.jpg?.image_url || '';
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-slate-900 p-6 rounded-2xl relative z-10 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <img src={img} alt={character.name} className="w-full md:w-48 h-64 object-cover rounded-xl"/>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
            <div className="max-h-96 overflow-y-auto mb-4">
              <p className="text-sm leading-relaxed">{character.about || 'No description available.'}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={onToggleFav} className="px-3 py-1 bg-pink-500 rounded">{isFav ? 'Remove Favorite' : 'Add Favorite'}</button>
              <button onClick={onClose} className="px-3 py-1 bg-white/10 rounded">Close</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}