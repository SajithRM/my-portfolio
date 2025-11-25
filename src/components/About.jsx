import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 md:px-20">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
      >
        About Me
      </motion.h2>

      {/* Main Layout */}
      <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="/profile1.png"  // <-- PLACE YOUR IMAGE IN public/profile.png
            alt="Profile"
            className="w-200 h-100 rounded-full object-cover border-4 border-white/10 shadow-lg shadow-blue-500/30"
          />
          <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500/20 -z-10"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h3 className="text-3xl font-semibold text-blue-300">
            AI Engineer & Full Stack Developer
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed text-lg">
            I’m an AI Engineer and Full-Stack Software Engineer with a strong 
            focus on building intelligent, scalable, and cloud-powered applications. 
            I work across machine learning, deep learning, and modern web development,
            creating solutions that are both smart and production-ready. With experience
            deploying models and full-stack systems on cloud platforms, I enjoy building 
            end-to-end products that make real impact.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            My goal is to create powerful, scalable solutions that combine intelligence, performance, and modern engineering.
          </p>

          {/* Skills */}
          <h4 className="mt-8 text-xl font-semibold text-purple-300">
            What I Bring to the Team
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Fast Problem-Solving in Critical Situations",
              "Continuous Learning",
              "Team Collaboration",
              "reativity & Innovation",
              "Time Management",
              "Prioritization During Critical Tasks",
              "Ability to Work Under Pressure",
              
            ].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/20 text-sm shadow-md shadow-purple-500/10"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
