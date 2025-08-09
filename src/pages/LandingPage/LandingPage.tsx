// src/LandingPage.tsx
import React, { useRef } from "react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold" style={{ color: "#25b342" }}>
          AlphaXM
        </h1>
        <div className="space-x-6">
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="hover:opacity-80 transition-colors"
            style={{ color: "#25b342" }}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:opacity-80 transition-colors"
            style={{ color: "#25b342" }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Building the <span style={{ color: "#25b342" }}>Future</span> of the
          Web
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          At AlphaXM, we craft fullstack websites of any complexity with
          stunning UI/UX, powered by AI and Blockchain for next-gen
          capabilities.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(servicesRef)}
          className="mt-10 px-8 py-4 text-lg rounded-xl font-semibold transition-colors shadow-lg"
          style={{
            backgroundColor: "#25b342",
            boxShadow: "0px 0px 20px rgba(37, 179, 66, 0.4)",
          }}
        >
          🚀 Let’s Build Your Dream Project
        </motion.button>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="min-h-screen bg-black px-6 py-20 border-t border-gray-800"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          What We Do Best
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Fullstack Development",
              desc: "From backend APIs to frontend interfaces — we build scalable, reliable, and modern apps.",
            },
            {
              title: "AI-Powered Solutions",
              desc: "We integrate AI models to make your product smarter, personalized, and more efficient.",
            },
            {
              title: "Blockchain Integration",
              desc: "Secure, decentralized, and future-proof features to give your app the Web3 edge.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl border border-gray-800 bg-black shadow-lg shadow-black/50"
              style={{
                borderColor: "#25b342",
              }}
            >
              <h4
                className="text-xl font-bold mb-4"
                style={{ color: "#25b342" }}
              >
                {service.title}
              </h4>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="min-h-screen bg-black px-6 py-20 border-t border-gray-800"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-gray-300">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                📞 Phone
              </h4>
              <p className="text-lg">+91-9130859725</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                📧 Email
              </h4>
              <p className="text-lg">sanket.naukarkar@gmail.com</p>
            </div>
            {/* <div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                📍 Address
              </h4>
              <p className="text-lg">Your Office Address Here</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                🌐 Socials
              </h4>
              <p className="text-lg">Twitter | LinkedIn | GitHub</p>
            </div> */}
          </div>

          {/* Right - Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-[#25b342]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-[#25b342]"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-4 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-[#25b342]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-[#25b342]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold w-full md:w-auto"
              style={{
                backgroundColor: "#25b342",
                boxShadow: "0px 0px 15px rgba(37, 179, 66, 0.4)",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 text-center border-t border-gray-800">
        © {new Date().getFullYear()} AlphaXM. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
