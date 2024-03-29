import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl animate-pulse">
        Skill
      </h3>
    </motion.div>
  );
}

export default Skill;
