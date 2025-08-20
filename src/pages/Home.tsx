import { useEffect, useState } from "react";
import { getCharacters, searchCharacters } from "../api";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import { useNavigate } from "react-router-dom";
import type { Character } from "../types/character";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    loadCharacters();
  }, [page]);

  const loadCharacters = async () => {
    const data = await getCharacters(page, 10);
    console.log('data: ', data);
    setCharacters(data?.results || []);
  };

  const handleSearch = async (query: string) => {
    if (!query) {
      loadCharacters();
      return;
    }
    const data = await searchCharacters(query);
    setCharacters(data.results || []);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
        Star Wars Characters
      </h1>
      <div className="flex justify-center mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <CharacterList
        characters={characters}
        onSelect={(id) => navigate(`/character/${id}`)}
      />
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
        >
          Prev
        </button>
        <span className="text-lg font-semibold">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
