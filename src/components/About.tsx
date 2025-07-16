import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, GitBranch, ShieldCheck } from "lucide-react";

export default function About() {
  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    }
  }, [aboutControls, aboutInView]);

  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      text: "Modern UIs using React & TailwindCSS",
    },
    {
      icon: <Server className="w-5 h-5 text-green-500" />,
      text: "Robust backends with Node.js & Express",
    },
    {
      icon: <Database className="w-5 h-5 text-orange-500" />,
      text: "Efficient DBs with MySQL & MongoDB",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-purple-500" />,
      text: "Version control using Git & GitHub",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
      text: "Secure, performant, real-time apps",
    },
  ];

  const skillsLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      glow: "rgba(227, 76, 38, 0.6)",
      name: "HTML",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      glow: "rgba(38, 77, 228, 0.6)",
      name: "CSS",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      glow: "rgba(247, 223, 30, 0.6)",
      name: "JavaScript",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      glow: "rgba(97, 218, 251, 0.6)",
      name: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      glow: "rgba(56, 189, 248, 0.6)",
      name: "TailwindCSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      glow: "rgba(100, 168, 66, 0.6)",
      name: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      glow: "rgba(0, 0, 0, 0.4)",
      name: "Express.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      glow: "rgba(0, 117, 143, 0.5)",
      name: "MySQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      glow: "rgba(78, 183, 72, 0.6)",
      name: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      glow: "rgba(240, 80, 51, 0.6)",
      name: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      glow: "rgba(36, 41, 46, 0.6)",
      name: "GitHub",
    },
    {
      src: "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg",
      glow: "rgba(117, 117, 117, 0.5)",
      name: "Socket.IO",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      glow: "rgba(49, 120, 198, 0.5)",
      name: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      glow: "rgba(119, 123, 180, 0.5)",
      name: "PHP",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      glow: "rgba(0, 115, 150, 0.5)",
      name: "Java",
    },
  ];

  return (
    <motion.section
      id="about"
      ref={aboutRef}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-100 to-white text-gray-800 flex flex-col items-center"
      initial="hidden"
      animate={aboutControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <h1 className="text-5xl font-bold text-center mb-12">
        About <span className="text-blue-600">Me</span>
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-6xl w-full">
        <motion.div
          className="text-left space-y-5 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutControls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <p className="text-lg leading-relaxed">
            Hi there! I'm a{" "}
            <span className="font-semibold text-blue-600">
              Full Stack Developer
            </span>{" "}
            passionate about clean code and building innovative solutions. I
            thrive in both <span className="text-green-600">frontend</span> and{" "}
            <span className="text-orange-600">backend</span> environments,
            crafting seamless and efficient user experiences.
          </p>

          <p className="text-lg font-medium text-gray-800">
            What I bring to the table:
          </p>
          <ul className="space-y-3">
            {highlights.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={aboutControls}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.9 + idx * 0.1, duration: 0.5 },
                  },
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-lg text-gray-700">
            Always open to learning new technologies and building something
            amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={aboutControls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.7, ease: "easeOut" },
            },
          }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-blue-400 shadow-2xl overflow-hidden p-1 bg-white hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/Profile_Pic.png"
            alt="Your Portrait"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-blue-300 animate-pulse"></div>
        </motion.div>
      </div>

      <div className="mt-24 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-10 justify-items-center">
          {skillsLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="relative w-24 h-24 flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-white via-gray-100 to-white shadow-xl hover:scale-110 hover:shadow-2xl transform transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-14 h-14 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                style={{ filter: `drop-shadow(0 0 12px ${logo.glow})` }}
              />
              <span className="mt-2 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
