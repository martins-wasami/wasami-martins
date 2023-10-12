"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <motion.section
      className="mb-28 sm:mb-40 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Get to know me!</SectionHeading>
      <p className="mb-3">
        Hi, my name is Martins and I am a{" "}
        <span className="font-bold">{"highly ambitious"}</span>,
        <span className="font-bold">{" self-motivated"}</span>, and
        <span className="font-bold">{" driven"}</span> frontend developer based
        in Nigeria. i started self-teaching how to code barely a year ago and
        since then, i have tremendously improved my skillsets.
      </p>

      <p className="mb-3">
        I am passionate about using technology to create elegant solutions for
        businesses and individuals in form of web application while also
        ensuring that user-experience and functionality are prioritized.
      </p>

      <p className="mb-3">
        My goal is to become a senior frontend engineer whose experience would
        be utilized in helping aspiring developers who are looking to build a
        career in tech.
      </p>
    </motion.section>
  );
};
export default About;
