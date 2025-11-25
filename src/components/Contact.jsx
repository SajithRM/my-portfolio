import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bq271cv", // replace with your EmailJS service ID
        "template_3fzqm2q", // replace with your template ID
        form.current,
        "EM3UL4ICCytw6w6-G" // replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Oops! Something went wrong.", error.text);
        }
      );
  };

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
        Contact Me
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Email", info: "sajithabdulraheeem@gmail.com", icon: "✉️" },
          { title: "Phone", info: "+94 771077652", icon: "📞" },
          { title: "Location", info: "Colombo, Sri Lanka", icon: "📍" },
        ].map((contact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="
              bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 
              shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 
              transition-all duration-300 text-center
            "
          >
            <div className="text-5xl mb-4">{contact.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {contact.title}
            </h3>
            <p className="text-gray-200">{contact.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-lg shadow-purple-500/10"
      >
        <h3 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center">
          Send Me a Message
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={6}
          className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition mb-6"
        ></textarea>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl font-semibold text-black hover:scale-105 transition transform"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;

//service_bq271cv
//template_n69cnum
//EM3UL4ICCytw6w6-G