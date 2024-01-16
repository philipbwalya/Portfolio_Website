import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl animate-pulse">
        About
      </h3>
      <motion.img
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute md:relative top-28 mb-0 sm:top-32 md:mb-0 md:top-[5%] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        src="https://avatars.githubusercontent.com/u/128143570?v=4"
      />

      <div className="absolute md:relative md:top-12 bottom-10 space-y-5  px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="px-2 text-base">
          Hello, I'm Philip, a dedicated{" "}
          <span className="text-yellow-300">full-stack software developer</span>{" "}
          with a degree in Social Work. I completed my software development
          training with the PowerLearnProject organization, FreeCodeCamp, and
          the University of Zero to Full Stack Hero. Additionally, I earned a
          four-year degree in Social Work from the University of Zambia between
          2020 and 2024. I am an active member of the Papa Fam community, the
          largest community where we engage in success coaching calls and
          discuss the latest advancements in web technology. My decision to
          pursue a career in software development stems from my passion for
          continuously learning and staying up to date the latest technologies
          in the industry.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
