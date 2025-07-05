import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  const internships = [
    {
      title: "Full Stack Developer",
      company: "Edunet Foundation | Feb 2025 – Mar 2025",
      description:
        "Built a responsive restaurant listing UI with React.js and integrated user authentication. Engineered RESTful APIs and secure backend with Node.js, Express.js, and JWT. Designed MongoDB schema to manage users, orders, and live updates for real-time data flow.",
    },
    {
      title: "Full Stack Development Intern",
      company: "Main Flow Services and Technologies Pvt. Ltd. | Sep 2024 – Nov 2024",
      description:
        "Developed scalable backend services and REST APIs with Node.js & Express.js.. Optimized database interactions with MongoDB and improved performance metrics. Collaborated in team sprints, implementing unit tests and agile workflows.",
    },
    {
      title: "Web Developer Intern",
      company: "Internship Studio | Apr 2024 – Jun 2024",
      description:
        "Created interactive UI components using React and TailwindCSS. Boosted app performance by 30% and integrated RESTful services. Strengthened design sensibility and code quality through collaborative peer reviews.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Asansol Engineering College | Aug 2021 – Jun 2025",
      details:
        "Built a solid foundation in computer science, software engineering, and web technologies. Projects included full-stack development, API integration, and real-world simulations. Actively participated in internships and certifications to expand skills beyond the classroom.",
    },
    {
      degree: "Higher Secondary (Science Stream)",
      institution: "Burnpur Riverside School | Apr 2019 – Mar 2021",
      details:
        "Subjects: Mathematics, Biology, Physical Education. Foundation in logic, problem-solving, and analytical thinking.",
    },
    {
      degree: "Secondary Education",
      institution: "St. Vincent's High and Technical School | May 2008 – Mar 2019",
      details:
        "Subjects: Computer Science, Mathematics, Science. Sparked early interest in technology and coding through hands-on learning.",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white text-gray-800"
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
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-600">Journey</span>
        </h1>

        {/* Internships Section */}
        {internships.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-10 flex items-center gap-2 text-blue-600">
              <Briefcase className="w-6 h-6" />
              Internships
            </h2>
            <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
              {internships.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-sm italic text-gray-500">{item.company}</p>
                    <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold mb-10 flex items-center gap-2 text-blue-600">
              <GraduationCap className="w-6 h-6" />
              Education
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-sm italic text-gray-500 mt-1">{edu.institution}</p>
                  <p className="mt-3 text-gray-700 leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
