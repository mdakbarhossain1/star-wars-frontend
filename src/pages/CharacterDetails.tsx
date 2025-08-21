import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterById } from "../api";
import type { CharacterDetails } from "../types/character";

// Simple loader component
function Loader() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-b-4 border-gray-700"></div>
    </div>
  );
}

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getCharacterById(id)
      .then((data) => {
        // Ensure data is of type CharacterDetails
        if ("properties" in data && "description" in data) {
          setCharacter(data as CharacterDetails);
        } else if ("properties" in data) {
          setCharacter({ description: "", ...data } as CharacterDetails);
        } else {
          setCharacter(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching character:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  if (!character)
    return <p className="text-white text-center mt-20">Character not found.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
      >
        ← Back
      </button>

      <div className="bg-gray-800 rounded-lg p-6 max-w-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          {character.properties.name}
        </h2>
        <p>
          <span className="font-semibold">Height:</span>{" "}
          {character.properties.height}
        </p>
        <p>
          <span className="font-semibold">Gender:</span>{" "}
          {character.properties.gender}
        </p>
        <p>
          <span className="font-semibold">Birth Year:</span>{" "}
          {character.properties.birth_year}
        </p>
        <p>
          <span className="font-semibold">Homeworld:</span>{" "}
          {character.properties.homeworld.name}
        </p>
        {character.properties.films &&
          character.properties.films.length > 0 && (
            <p className="mt-2">
              <span className="font-semibold">Films:</span>{" "}
              {character.properties.films.map((film) => film.title).join(", ")}
            </p>
          )}
      </div>
    </div>
  );
}
