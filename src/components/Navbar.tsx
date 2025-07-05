import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X as CloseIcon, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  const menuItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          shadow ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-3xl font-extrabold tracking-tight text-blue-700 hover:text-indigo-700 transition-all"
          >
            SouvikVerse
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            {menuItems.map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active-link"
                className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 relative group transition-all duration-200"
              >
                {section}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-[.active-link]:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl transition-transform duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <CloseIcon className="w-7 h-7 rotate-90 text-blue-600 transition-transform duration-300" />
              ) : (
                <Menu className="w-7 h-7 text-blue-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/90 backdrop-blur-xl flex flex-col space-y-6 px-6 py-6 rounded-b-xl shadow-inner border-t"
            >
              {menuItems.map((section) => (
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-700 font-semibold"
                  className="text-center font-medium text-lg text-gray-800 hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {section}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }} // Slight transparency on hover
            whileTap={{ scale: 0.95 }}
            // Glassmorphism-inspired classes
            className="fixed cursor-pointer bottom-6 right-6 z-50 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full shadow-lg shadow-gray-700/20 hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse text-blue-500 group-hover:animate-none" />{" "}
            {/* Soft pulse animation */}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
