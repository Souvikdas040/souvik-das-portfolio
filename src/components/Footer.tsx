import { FaGithub, FaLinkedin, FaStackOverflow, } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-white to-purple-100 py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Copyright */}
        <p className="text-gray-700 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-800">SouvikVerse</span>. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Souvikdas040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/souvikdas040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://stackoverflow.com/users/30893144/souvik-das"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#E36E1D] transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaStackOverflow className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
