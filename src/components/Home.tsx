import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Grid Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full opacity-10 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Abstract Bold Gradient Background */}
      <motion.div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-[#ff512f] to-[#dd2476] rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-[#24c6dc] to-[#514a9d] rounded-full blur-2xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-[#f9d423] to-[#ff4e50] rounded-full blur-2xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Content Section */}
      <div className="relative z-10 text-black text-center md:text-left md:px-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Souvik Das
          </span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
          A passionate Full Stack Developer crafting beautiful, fast, and modern
          digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
          <motion.a
            href="#about"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto text-center"
          >
            Let's Get Started
          </motion.a>
          <motion.a
            href="/Souvik_Das_Resume.pdf"
            className="bg-white text-primary border-1 px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto text-center"
            download="Souvik_Das_Resume.pdf"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
