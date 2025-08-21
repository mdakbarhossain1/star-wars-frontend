import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // trigger search as you type
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search characters..."
        value={query}
        onChange={handleChange}
        className="flex-1 px-4 py-2 border border-amber-300 rounded-lg text-amber-300 focus:outline-none"
      />
    </div>
  );
}
