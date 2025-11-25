
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from "../assets/profile1.png"; // <-- your image here

const rotatingTitles = ["AI Engineer", "Together the Data"];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Rotate titles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center px-10 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          {/* Small intro */}
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-300 tracking-wide"
          >
            Hello, I'm
          </motion.h3>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-2 text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-blue-400"
          >
            Sajith
          </motion.h1>

          {/* Rotating Title */}
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-3xl md:text-4xl font-semibold text-gray-200"
          >
            {rotatingTitles[index]}
          </motion.h2>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-gray-300 max-w-md"
          >
            Passionate about building intelligent systems, full-stack solutions, and
            modern interactive user experiences..
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600/80 text-white rounded-xl font-semibold 
              hover:bg-purple-600 transition"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-xl text-gray-200 
              hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Sajith"
            className="w-[80%] md:w-[90%] drop-shadow-[0_0px_0px_rgba(100,0,255,0.4)] rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
