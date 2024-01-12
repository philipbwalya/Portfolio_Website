"use client";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-gray-400 rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-gray-700 rounded-full w-[300px] h-[300px] mt-52 bg-transparent" />
      <div className=" absolute border border-gray-600 rounded-full w-[450px] h-[450px] mt-52 bg-transparent" />
      <div className="absolute rounded-full border border-gray-500 opacity-20 h-[600px] w-[600px] animate-pulse mt-52" />
      <div className="absolute rounded-full border border-gray-400 opacity-20 h-[700px] w-[700px] animate-pulse mt-52" />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
