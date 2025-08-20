import type { Character } from "../types/character";

interface Props {
  character: Character;
  onClick: () => void;
}

export default function CharacterCard({ character, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-yellow-400 transition"
    >
      <h3 className="text-xl font-bold text-yellow-300">{character.name}</h3>
      <p className="text-gray-300">Height: {character.height}</p>
      <p className="text-gray-300">Gender: {character.gender}</p>
    </div>
  );
}
