import { useEffect, useState } from "react";
import { getCharacterById } from "../api";
import { useParams } from "react-router-dom";
import type { Character } from "../types/character";

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      getCharacterById(id).then((data) => setCharacter(data));
    }
  }, [id]);

  if (!character) return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <div className="bg-gray-800 rounded-lg p-6 max-w-lg shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          {character.name}
        </h2>
        <p><span className="font-semibold">Height:</span> {character.height}</p>
        <p><span className="font-semibold">Gender:</span> {character.gender}</p>
        <p><span className="font-semibold">Birth Year:</span> {character.birth_year}</p>
        <p><span className="font-semibold">Homeworld:</span> {character.homeworld}</p>
        <p className="mt-2">
          <span className="font-semibold">Films:</span>{" "}
          {character.films?.join(", ")}
        </p>
      </div>
    </div>
  );
}
