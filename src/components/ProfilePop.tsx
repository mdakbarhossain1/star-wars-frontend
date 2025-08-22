import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ProfilePop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400 shadow-lg hover:bg-yellow-300 transition"
        >
          <img
            src="https://i.ibb.co.com/PkZcGfF/mdakbarhossain.jpg"
            alt="Md Akbar Hossain"
            className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-full"
          />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="w-[90vw] max-w-sm sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-yellow-400 p-3 sm:p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co.com/PkZcGfF/mdakbarhossain.jpg"
                alt="mdakbarhossain"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h2 className="text-black font-bold text-sm sm:text-base">
                  Md Akbar Hossain
                </h2>
                <p className="text-xs sm:text-sm text-gray-700">
                  Full-Stack Developer 🚀
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black text-lg sm:text-xl font-bold hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-3 sm:p-4 text-black space-y-3">
            <div className="flex items-center gap-3 break-words">
              <FaEnvelope className="text-yellow-500 flex-shrink-0" />
              <a
                href="mailto:mdakbarhossain16@mail.com"
                className="text-xs sm:text-sm text-gray-800 hover:underline"
              >
                mdakbarhossain16@mail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-yellow-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-800">
                +8801836456682
              </span>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaGithub className="text-yellow-500 flex-shrink-0" />
              <a
                href="https://github.com/mdakbarhossain1"
                target="_blank"
                className="text-xs sm:text-sm text-gray-800 hover:underline"
              >
                github.com/mdakbarhossain1
              </a>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaLinkedin className="text-yellow-500 flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/md-akbar-hossain/"
                target="_blank"
                className="text-xs sm:text-sm text-gray-800 hover:underline"
              >
                linkedin.com/in/md-akbar-hossain
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
