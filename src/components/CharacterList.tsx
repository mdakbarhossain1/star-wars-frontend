import type { Character } from "../types/character";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Character[];
  onSelect: (id: string) => void;
}

export default function CharacterList({ characters, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((char) => (
        <CharacterCard
          key={char.uid}
          character={char}
          onClick={() => onSelect(char.uid)}
        />
      ))}
    </div>
  );
}
