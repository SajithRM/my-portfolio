import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-20 pb-10 px-8 md:px-16">

      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12"
      >

        {/* Branding Column */}
        <div>
          <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Sajith.
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Passionate Software Engineer building clean and modern digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-6">
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com" target="_blank" className="text-gray-300 hover:text-purple-400 transition">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
              <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="mailto:yourEmail@gmail.com" className="text-gray-300 hover:text-red-400 transition">
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-400">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Skills</li>
            <li className="hover:text-white transition cursor-pointer">Projects</li>
            <li className="hover:text-white transition cursor-pointer">Hire Me</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-400">Featured Projects</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">AI Clothing Classifier</li>
            <li className="hover:text-white transition cursor-pointer">FastAPI Face Recognition</li>
            <li className="hover:text-white transition cursor-pointer">MERN Booking System</li>
            <li className="hover:text-white transition cursor-pointer">Mobile Healthcare App</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-400">Contact Info</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" /> yourEmail@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-400" /> +94 123 456 789
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" /> Sri Lanka
            </li>
          </ul>
        </div>

      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-12"></div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Subscribe to the Newsletter
        </h4>
        <p className="text-gray-400 mt-3 mb-6">
          Stay updated with my latest projects and engineering insights.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 
            text-white w-64 backdrop-blur-lg focus:outline-none focus:border-purple-400"
          />
          <button
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white 
            font-medium shadow-lg hover:scale-105 transition"
          >
            Subscribe
          </button>
        </div>
      </motion.div>

      {/* Divider Bottom */}
      <div className="w-full h-px bg-white/10 my-12"></div>

      {/* Bottom Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Sajith — All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
