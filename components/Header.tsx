"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex items-start sticky top-0 justify-between max-w-7xl mx-auto z-20 xl:items-center px-5 bg-[rgb(36,36,36)]">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* React social icons with profile url */}
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://linkedin.com"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://linkedin.com"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://linkedin.com"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://linkedin.com"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="cursor-pointer flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="gray"
          network="email"
        />
        <p className="uppercase hidden sm:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
