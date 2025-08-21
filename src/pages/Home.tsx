import { useEffect, useState } from "react";
import { getCharacters, searchCharacters } from "../api";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import { useNavigate } from "react-router-dom";
import type { Character, CharactersResponse } from "../types/character";
import { useDebounce } from "../hooks/useDebounce";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    loadCharacters();
  }, [page]);

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    } else {
      loadCharacters();
    }
  }, [debouncedQuery, page]);

  const loadCharacters = async () => {
    const data: CharactersResponse = await getCharacters(page, 12);
    setCharacters(data.data);
    setTotalPages(data.totalPages);
  };

  const handleSearch = async (query: string) => {
    if (!query) {
      loadCharacters();
      return;
    }
    const data = await searchCharacters(query);

    const mappedCharacters: Character[] = data.data.map((item: any) => ({
      uid: item.result.uid,
      name: item.result.properties.name,
      url: item.result.properties.url,
    }));

    setCharacters(mappedCharacters);
    setTotalPages(1); // disable pagination for search
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setPage(1)}
          className="px-3 py-1 rounded-md bg-gray-700 hover:bg-yellow-400 hover:text-black"
        >
          1
        </button>
      );
      if (start > 2) {
        pages.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded-md ${
            i === page
              ? "bg-yellow-400 text-black font-bold"
              : "bg-gray-700 hover:bg-yellow-400 hover:text-black"
          }`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => setPage(totalPages)}
          className="px-3 py-1 rounded-md bg-gray-700 hover:bg-yellow-400 hover:text-black"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
        Star Wars Characters
      </h1>
      <div className="flex justify-center mb-8">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <CharacterList
        characters={characters}
        onSelect={(id) => navigate(`/character/${id}`)}
      />

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8 items-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-300"
          }`}
        >
          Prev
        </button>

        <div className="flex gap-2">{renderPagination()}</div>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
