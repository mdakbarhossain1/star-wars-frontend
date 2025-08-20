
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search characters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
      >
        Search
      </button>
    </form>
  );
}
