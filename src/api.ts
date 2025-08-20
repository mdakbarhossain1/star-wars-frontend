import type { Character } from "./types/character";


const API_BASE = "https://star-wars-backend-iota.vercel.app/api/characters";

export async function getCharacters(page = 1, limit = 10): Promise<{ results: Character[] }> {
  const res = await fetch(`${API_BASE}?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}

export async function searchCharacters(name: string): Promise<{ results: Character[] }> {
  const res = await fetch(`${API_BASE}/search?name=${name}`);
  if (!res.ok) throw new Error("Failed to search characters");
  return res.json();
}

export async function getCharacterById(id: string): Promise<Character> {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch character");
  return res.json();
}
