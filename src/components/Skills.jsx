import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      "Supervised  Learning",
      "Unsupervise Learning",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Data Preprocesing & EDA",
      "Scikit-learn NumPy Pandas",
    ],
  },
  {
    title: " Deep Learning",
    skills: [
      "CNNs RNNs LSTM Transformers",
      "Transfer Learning",
      "Face Recognition & Image Classification",
      "TensorFlow  Keras  PyTorch",
      "OpenCV Matplotlib",
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      "REST APIs FastAPI Flask",
      "Docker",
      "AWS  GCP  Azure",
      "Serverless Functions",
      "MLOps Basics (CI/CD Monitoring)",
    ],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "MongoDB", "SQL","Java","MySql" ,"REST APIs"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo", "Android (Java)", "Firebase"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Vite", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 md:px-20">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 to-blue-400 mb-16"
      >
        Skills
      </motion.h2>

      {/* Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="
              bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 
              shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 
              transition-all duration-300
            "
          >
            {/* Category Title */}
            <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.12, rotateX: 10, rotateY: -10 }}
                  className="
                    bg-white/10 border border-white/20 px-4 py-3 rounded-xl
                    text-center backdrop-blur-lg cursor-pointer
                    hover:bg-white/20 transition relative
                  "
                >
                  {/* Glow Ring Behind Skill */}
                  <div className="
                    absolute inset-0 
                    rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20
                    blur-xl opacity-0 group-hover:opacity-100 transition
                  "></div>

                  <span className="relative text-sm font-medium text-gray-100">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Skills;
