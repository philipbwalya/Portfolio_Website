import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://avatars.githubusercontent.com/u/128143570?v=4"
        alt="img"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">TEAM MEMBER</h4>
        <p className="font-bold text-xl mt-1">SOFT TECH</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/128143570?v=4"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/128143570?v=4"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/128143570?v=4"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/128143570?v=4"
            alt=""
          />
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">started...ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
