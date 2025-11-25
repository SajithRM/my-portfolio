import { motion } from "framer-motion";
import profileImage from "../assets/hire.png"; // Change to your actual image

const HireMe = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 md:px-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 to-blue-400 mb-16"
      >
        Hire Me
      </motion.h2>

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition" />

            <img
              src={profileImage}
              alt="Hire Me"
              className="w-80 h-80 object-cover rounded-3xl border border-white/10 shadow-xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition duration-300"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            I'm Open for Work
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m currently open to opportunities for{" "}
            <span className="text-purple-400 font-semibold">AI & Machine Learning</span>,{" "}
            <span className="text-blue-400 font-semibold">FullStack Development</span>,{" "}
           
            <span className="text-blue-400 font-semibold">Freelance Projects</span>.
            <br />
            I bring strong problem-solving skills, clean coding practices, and a passion for building meaningful digital products.
          </p>

          {/* Highlight Points */}
          <ul className="space-y-3">
            {[
              "Web Stack Development",
              "AI & Machine Learning Solutions",
              "Mobile App Development",
              "REST APIs & Backend Systems",
              
            ].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-gray-200"
              >
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-6 pt-4">
            <a
              href="/sajith.pdf" // Change this to your CV
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl text-white font-medium hover:bg-white/20 hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
