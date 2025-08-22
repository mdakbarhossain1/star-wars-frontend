import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number }[]
  >([]);

  // Generate random stars with size + animation delay
  useEffect(() => {
    const generatedStars = Array.from({ length: 500 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 1.5) * 15;
    const y = (e.clientY / innerHeight - 1.5) * 15;
    setOffset({ x, y });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Stars */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-200"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-70 animate-star hover:scale-150 hover:bg-yellow-400 transition-transform duration-300"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,0,0.9)]">
          STAR WARS UNIVERSE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl">
          Explore characters, their stories, and the galaxy far, far away...
        </p>

        <button
          onClick={() => navigate("/characters")}
          className="relative px-8 py-3 font-bold text-black bg-yellow-400 rounded-lg overflow-hidden group/button"
        >
          <span className="relative z-10">Start Exploring →</span>
          {/* Lightsaber glow effect */}
          <span className="absolute inset-0 bg-yellow-300 translate-x-[-100%] group-hover/button:translate-x-0 transition-transform duration-500"></span>
        </button>
      </div>

      {/* Subtle overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-0"></div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes star {
            0% { opacity: 0.3; transform: scale(1) translateY(0px); }
            25% { opacity: 1; transform: scale(1.3) translateY(-2px); }
            50% { opacity: 0.6; transform: scale(1) translateY(0px); }
            75% { opacity: 1; transform: scale(1.2) translateY(2px); }
            100% { opacity: 0.3; transform: scale(1) translateY(0px); }
          }
          .animate-star {
            animation: star 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
