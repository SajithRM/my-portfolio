import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ThreeCube = () => {
  const cubeRef = useRef(null);

  // Mouse movement
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cubeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    rotateX.set(y / 20);  
    rotateY.set(-x / 20);
  };

  const rotateXDeg = useTransform(rotateX, (v) => `${v}deg`);
  const rotateYDeg = useTransform(rotateY, (v) => `${v}deg`);

  const images = [
    "https://picsum.photos/300?random=10",
    "https://picsum.photos/300?random=11",
    "https://picsum.photos/300?random=12",
    "https://picsum.photos/300?random=13",
    "https://picsum.photos/300?random=14",
    "https://picsum.photos/300?random=15",
  ];

  return (
    <div className="w-full flex justify-center mt-10">
      <motion.div
        ref={cubeRef}
        className="relative w-64 h-64 transform-style-preserve-3d"
        onMouseMove={handleMouseMove}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          rotateX: rotateXDeg,
          rotateY: rotateYDeg,
        }}
      >
        {/* Cube faces */}
        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateY(0deg) translateZ(128px)" }}>
          <img src={images[0]} className="w-full h-full object-cover" />
        </div>

        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateY(90deg) translateZ(128px)" }}>
          <img src={images[1]} className="w-full h-full object-cover" />
        </div>

        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateY(180deg) translateZ(128px)" }}>
          <img src={images[2]} className="w-full h-full object-cover" />
        </div>

        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateY(-90deg) translateZ(128px)" }}>
          <img src={images[3]} className="w-full h-full object-cover" />
        </div>

        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateX(90deg) translateZ(128px)" }}>
          <img src={images[4]} className="w-full h-full object-cover" />
        </div>

        <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ transform: "rotateX(-90deg) translateZ(128px)" }}>
          <img src={images[5]} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default ThreeCube;
