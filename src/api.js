import axios from 'axios';
const BASE = 'https://api.jikan.moe/v4';
export const getCharacters = async (page = 1) => {
  const res = await axios.get(`${BASE}/characters?page=${page}`);
  return res.data.data;
};
export const searchCharacters = async (q) => {
  const res = await axios.get(`${BASE}/characters?q=${q}`);
  return res.data.data;
};
export const getCharacterById = async (id) => {
  const res = await axios.get(`${BASE}/characters/${id}/full`);
  return res.data.data;
};