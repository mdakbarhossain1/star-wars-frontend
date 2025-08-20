import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-6xl font-bold text-yellow-400 mb-6">
        STAR WARS UNIVERSE
      </h1>
      <p className="text-xl text-gray-300 mb-10">
        Explore characters, their stories, and the galaxy far, far away...
      </p>
      <button
        onClick={() => navigate("/characters")}
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
      >
        Start Exploring →
      </button>
    </div>
  );
}
