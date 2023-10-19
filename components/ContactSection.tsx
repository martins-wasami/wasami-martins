"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact "
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wasamimartins@gmail.com">
          wasamimartins@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit">
          Submit <FaPaperPlane />
        </button>
      </form>
    </motion.section>
  );
};
export default ContactSection;
