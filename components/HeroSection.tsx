"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/assets/projects/martins.jpg"
              alt="Martins Wasami"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full shadow-xl w-24 h-24 border-[.35rem] object-cover border-white"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "string",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          <Typewriter
            options={{
              strings: ["Hello, I'm Martins", "I'm a ReactJS/NextJS developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>{" "}
        <span className="text-[18px]">
          {" "}
          I am passionate about using technology to create elegant solutions for
          businesses and individuals in form of web application.
        </span>
      </motion.h1>

      <motion.div
        className="flex px-4 text-lg font-medium flex-col gap-2 sm:flex-row items-center justify-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-transparent hover:text-gray-950 hover:border 
          hover:border-black/10 active:scale-105 transition hover:mr-2  dark:text-gray-950 dark:bg-white"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/wasami-martins.pdf"
          download
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110  hover:bg-transparent hover:text-gray-950 hover:border 
          hover:border-black/10 active:scale-105 transition hover:mr-2  dark:text-gray-950 dark:bg-white"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/martins-wasami-9527a0234/"
          target="_blank"
          className="bg-white text-[1.5rem] text-gray-700 p-3 flex items-center gap-2 rounded-full border border-black/10 hover:bg-transparent active:scale-[1.15] transition 
          focus:scale-[1.15] hover:scale-110   hover:text-gray-950 hover:ml-2 hover:mr-2 "
        >
          <BsLinkedin className="opacity-60 group-hover:translate-y-1 transition hover:opacity-90" />
        </a>
        <a
          href="https://github.com/martins-wasami"
          target="_blank"
          className="bg-white text-[1.5rem] text-gray-700 p-3 flex items-center gap-2 rounded-full border border-black/10 hover:bg-transparent active:scale-105 transition focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:ml-2 hover:mr-2 "
        >
          <FaGithubSquare className="opacity-60 hover:opacity-90 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
};
export default HeroSection;
