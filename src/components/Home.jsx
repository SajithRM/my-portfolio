

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [matrix, setMatrix] = useState([]);

//   // Mouse movement effect
//   const handleMouseMove = (e) => {
//     setMousePos({
//       x: (e.clientX / window.innerWidth - 0.5) * 20,
//       y: (e.clientY / window.innerHeight - 0.5) * 20,
//     });
//   };

//   // Matrix background generation
//   useEffect(() => {
//     const columns = Math.floor(window.innerWidth / 20);
//     const newMatrix = new Array(columns).fill(0).map(() => ({
//       text: "01",
//       top: Math.random() * window.innerHeight,
//       speed: 2 + Math.random() * 3,
//     }));
//     setMatrix(newMatrix);

//     const interval = setInterval(() => {
//       setMatrix((prev) =>
//         prev.map((col) => ({
//           ...col,
//           top: col.top > window.innerHeight ? 0 : col.top + col.speed,
//         }))
//       );
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
//     >

//       {/* MATRIX CODE RAIN (full background) */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         {matrix.map((col, i) => (
//           <div
//             key={i}
//             className="absolute text-green-400/80 font-mono text-[14px]"
//             style={{
//               left: i * 20,
//               top: col.top,
//             }}
//           >
//             {col.text}
//           </div>
//         ))}
//       </div>

//       {/* Glowing floating shapes */}
//       <motion.div
//         animate={{ y: [0, 40, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"
//       />

//       <motion.div
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 blur-2xl rounded-full"
//       />

//       {/* MAIN TEXT */}
//       <motion.div
//         style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
//         className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
//       >
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-2xl"
//         >
//           Hello, I'm Sajith
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.3 }}
//           className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
//         >
//           A Passionate AI Engineer & Full Stack Developer
//         </motion.p>

//         <motion.button
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10 px-8 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl hover:bg-white/20 transition"
//         >
//           Explore My Work
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

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
            modern interactive user experiences.
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
