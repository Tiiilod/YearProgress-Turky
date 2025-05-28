import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title, description }) => {
  return (
    <section className="bg-blue-200 py-64 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-snug">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;