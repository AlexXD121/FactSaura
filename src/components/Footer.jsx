import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-custom-black via-gray-900 to-custom-black text-gray-400 py-12 mt-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-white font-bold text-lg mb-4 md:mb-0">
          <span className="bg-gradient-to-r from-custom-cyan to-blue-400 bg-clip-text text-transparent">
            Built for MumbaiHacks 2025
          </span>
        </div>

        {/* Center */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {["home", "features", "demo", "contact"].map((link) => (
            <button
              key={link}
              onClick={(e) => e.preventDefault()}
              className="hover:text-custom-cyan transition-colors capitalize"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex space-x-6">
          <button 
            onClick={(e) => e.preventDefault()}
            className="p-3 rounded-full bg-gray-800 hover:bg-custom-cyan hover:text-black transition-all duration-300 transform hover:scale-110"
          >
            <Github size={20} />
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Twitter size={20} />
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={20} />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700/50 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-500">
          Powered by <span className="text-custom-cyan font-semibold">React</span>, 
          <span className="text-blue-400 font-semibold"> Tailwind CSS</span> & 
          <span className="text-red-400"> open-source</span> 
          <span className="text-red-500 animate-pulse"> ❤️</span>
        </p>
      </div>
    </footer>
  );
}
