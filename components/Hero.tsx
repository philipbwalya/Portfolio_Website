import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey there, My names are Philip Bwalya",
      "I'm a Full-Stack Software Developer",
      "***The CodingAddict***",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto h-40 w-40 object-cover"
        alt="image"
        height={40 * 16}
        width={40 * 16}
        src="https://avatars.githubusercontent.com/u/128143570?v=4"
      />
      <div className="">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          SOFTWARE ENGINEER
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
