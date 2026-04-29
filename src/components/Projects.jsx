import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "News Research AI (RAG System)",
    description:
      "An AI-powered news research assistant built using Retrieval-Augmented Generation (RAG).",
    image: "/projects/news.png",
    github: "https://github.com/SajithRM/newsresearchtool",
    tech: ["User │ ▼ React Frontend │ ▼ FastAPI Backend │ ▼ Embedding Model │ ▼ FAISS Vector Store │ ▼ Groq LLM │ ▼ Answer + Sources",""
    ],
  },
  {
    title: "AI SQL Chatbot",
    description:
      "A Generative AI-powered chatbot that converts natural language queries into SQL and retrieves results from a MySQL database.",
    image: "/projects/chatbot.png",
    github: "https://github.com/SajithRM/chatbot-",
    tech: ["LangChain ,Google Gemini API ,FastAPI ,React ,MySQL ,ChromaDB ,Sentence Transformers",""
    ],
  },
  {
    title: "Clothing Fashion for Customers",
    description:
      "We trained a clothing dataset using CNN with advanced preprocessing and image cleaning.",
    image: "/projects/cloth.png",
    github: "https://github.com/Subanista/DLAssignment",
    tech: ["CNN", "ANN", "KNN", "TensorFlow","Image Resizing & Scaling","Normalization & Standardization","Color Space Conversions",
      "Data Augmentation",""
    ],
  },
  {
    title: "Dialysis Care Mobile Application",
    description:
      "A React Native mobile app to support CKD patients with food tracking, chatbot, fluid monitoring, and disease identification.",
    image: "/projects/dialisis.png",
    github: "https://github.com/your-repo-2",
    tech: ["Machine Learning","Deep Learning","Fast Api","Python","Jupyter","React Native", "MongoDB", "Node.js"],
  },
  {
    title: "Hospital Management System",
    description:
      "A complete HMS system for doctors, patients, and admins built using MERN stack.",
    image: "/projects/hospital.png",
    github: "https://github.com/SajithRM/hopital_system",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  // Duplicate for full grid
  {
    title: "Gym Management System",
    description:
      "Implemented user-friendly interfaces for gym staff and clients, facilitating efficient management of gym operations and client interactions.",
    image: "/projects/gym.jpeg",
    github: "https://github.com/thusith321/gym_management",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "AI Shopping Assistant Chatbot",
    description:
      "An LLM-powered chatbot that helps users search products, compare prices, answer shopping queries, and recommend items using user preferences.",
    image: "/projects/chb.png",
    github: "https://github.com/your-repo-2",
    tech: ["LLM", "Python", "FastAPI", "Vector DB", "OpenAI API"],
  },
  {
    title: "Customer Support Auto-Reply System",
    description:
      "An automated support assistant that reads emails or chat messages and generates helpful, context-aware responses using a fine-tuned LLM.",
    image: "/projects/auto.jpeg",
    github: "https://github.com/SajithRM/hopital_system",
    tech: ["Fine-tuning", "Node.js", "LLM", "NLP", "OpenAI"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 md:px-20">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 to-blue-400"
      >
        Projects
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.04, rotateY: 5 }}
            onClick={() => setSelected(project)}
            
            className="
              bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden 
              border border-white/10 shadow-lg shadow-purple-500/10
              transition-all duration-300 cursor-pointer
              hover:shadow-purple-500/20 hover:border-purple-400/40
              flex flex-col
            "
          >
            {/* Project Image */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-blue-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* GitHub Button FIXED at Bottom */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, "_blank");
                }}
                className="mt-6 w-full px-4 py-2 rounded-lg 
                bg-gradient-to-r from-purple-600/40 to-blue-600/40
                border border-white/10 
                backdrop-blur-xl
                hover:from-purple-600/60 hover:to-blue-600/60
                transition flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                View on GitHub
              </button>
            </div>
          </motion.div>
        ))}

      </div>


      {/* MODAL - Deep Project Details */}
      {/* <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              
              className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-lg w-full backdrop-blur-xl shadow-2xl"
            >
              <img
                src={selected.image}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="text-3xl mt-5 font-bold text-purple-300">
                {selected.title}
              </h3>

              <p className="text-gray-200 mt-4 leading-relaxed">
                {selected.description}
              </p>

              <h4 className="text-xl mt-5 font-semibold text-blue-300">
                Technologies Used:
              </h4>

              <div className="flex flex-wrap gap-2 mt-3">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open(selected.github, "_blank")}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                bg-gradient-to-r from-purple-600/40 to-blue-600/40
                hover:from-purple-600/60 hover:to-blue-600/60 transition"
              >
                <ExternalLink size={18} />
                Visit GitHub Repo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
  {selected && (
    <motion.div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl shadow-2xl w-full max-w-2xl max-h-[100vh] overflow-y-auto p-6 flex flex-col"
      >
        {/* Project Image */}
        <img
          src={selected.image}
          className="w-full h-56 md:h-64 object-cover rounded-lg flex-shrink-0"
        />

        {/* Project Title */}
        <h3 className="text-3xl mt-5 font-bold text-purple-300">
          {selected.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-200 mt-4 leading-relaxed flex-shrink-0">
          {selected.description}
        </p>

        {/* Technologies */}
        <h4 className="text-xl mt-5 font-semibold text-blue-300">
          Technologies Used:
        </h4>
        <div className="flex flex-wrap gap-2 mt-3">
          {selected.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <button
          onClick={() => window.open(selected.github, "_blank")}
          className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
          bg-gradient-to-r from-purple-600/40 to-blue-600/40
          hover:from-purple-600/60 hover:to-blue-600/60 transition flex-shrink-0"
        >
          <ExternalLink size={18} />
          Visit GitHub Repo
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Projects;
