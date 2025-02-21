import axios from 'axios';

const API_BASE = 'http://localhost:3000/api';

export const fetchUser = (id) => axios.get(`${API_BASE}/user/${id}`);
export const analyzeGame = (userId) => axios.post(`${API_BASE}/training/analyze`, { userId });
