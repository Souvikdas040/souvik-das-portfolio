import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Food Delivery App",
      image: "./public/project-img/food-delivery-app.png",
      description:
        "Food Delivery App using MERN stack — streamlined, responsive, and modern.",
      tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Stripe", "TailwindCSS"],
      github: "https://github.com/Souvikdas040/foodDelivery-app",
      live: "https://fooddelivery-app-frontend-ql8o.onrender.com",
    },
    {
      title: "Fun Fact Generator",
      image: "./public/project-img/fun-fact-generator.png",
      description:
        "Quick Laughs, Feline Facts & More An interactive React app built to surprise and entertain with every refresh.",
      tags: ["Vite", "React", "TailwindCSS", "CatFact API", "Official Joke API", "Advice Slip API", "Useless Facts API"],
      github: "https://github.com/Souvikdas040/fun-fact-generator",
      live: "https://fun-fact-generator-aa63.onrender.com",
    },
    {
      title: "Weather App",
      image: "./public/project-img/weather-app.png",
      description:
        "A simple weather application fetching real-time weather data from OpenWeather API.",
      tags: ["React", "TypeScript", "TailwindCSS", "Lucide Icons", "Framer Motion", "OpenWeather API", "date-fns"],
      github: "https://github.com/Souvikdas040/weather-app",
      live: "https://weather-app-84mz.onrender.com",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-50 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
        <span className="text-blue-600">Projects</span>
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Image zoom effect */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content aligned to left */}
            <div className="p-5 flex flex-col flex-grow justify-between text-left">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-black text-sm"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="text-lg" />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
