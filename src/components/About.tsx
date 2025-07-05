import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, GitBranch, ShieldCheck } from "lucide-react";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const skills = [
    { name: "React & TailwindCSS", level: "80%", color: "bg-blue-500" },
    { name: "Node.js & Express", level: "75%", color: "bg-green-500" },
    { name: "MySQL & MongoDB", level: "70%", color: "bg-orange-500" },
    { name: "Git & GitHub", level: "65%", color: "bg-purple-500" },
    { name: "WebSocket & Real-time Apps", level: "50%", color: "bg-pink-500" },
  ];

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

  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-100 to-white text-gray-800 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-center mb-12">
        About <span className="text-blue-600">Me</span>
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-6xl w-full">
        {/* Text */}
        <div className="text-left space-y-5 max-w-2xl">
          <p className="text-lg">
            Hi there! I'm a{" "}
            <span className="font-semibold text-blue-600">Full Stack Developer</span> passionate
            about clean code and building innovative solutions. I thrive in both{" "}
            <span className="text-green-600">frontend</span> and{" "}
            <span className="text-orange-600">backend</span> environments, crafting seamless and
            efficient user experiences.
          </p>

          <p className="text-lg font-medium text-gray-800">What I bring to the table:</p>
          <ul className="space-y-3">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-base">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-gray-700">
            Always open to learning new technologies and building something amazing together!
          </p>
        </div>

        {/* Responsive Image */}
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
                        rounded-2xl border border-gray-200 shadow-xl overflow-hidden 
                        p-1 bg-white hover:scale-105 transition-transform duration-300">
          <img
            src="/Profile_Pic.png"
            alt="Your Portrait"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Skills */}
      <div ref={ref} className="mt-20 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8 text-center lg:text-left">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <p className="text-base font-medium mb-1 text-gray-700">{skill.name}</p>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <motion.div
                    className={`${skill.color} h-3 rounded-full`}
                    initial={{ width: 0 }}
                    animate={controls}
                    variants={{ visible: { width: skill.level } }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-12 text-right">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
