import React from "react";
import { motion } from "framer-motion";
import myphoto from "../assets/Gitika.jpeg";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 bg-white overflow-hidden bg-gradient-to-br from-white via-purple-50 to-violet-100">

      {/* LEFT SECTION */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl flex flex-col gap-6 mt-20 lg:mt-0"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-[#4e525a]"
        >
          Hey, I'm Gitika Chahar!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl lg:text-7xl font-bold text-[#6e06f2] leading-tight"
        >
          Full Stack Web Developer & DSA Enthusiast
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-[#4e525a] leading-relaxed"
        >
          I am a passionate full stack web developer with a strong
          interest in data structures and algorithms. Currently pursuing
          my degree in Computer Science.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-5 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6e06f2] text-white px-6 py-3 rounded-xl shadow-lg"
          >
            Learn More
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "#6e06f2",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#6e06f2] text-[#6e06f2] px-6 py-3 rounded-xl transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 lg:mt-0"
      >

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-r from-[#6e06f2] to-purple-400 shadow-2xl"
        >
          <img
            src={myphoto}
            alt="Gitika"
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}