"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const ContactSection = () => {
  const { ref } = useSectionInView("Contact");

  const form: any = useRef();

  const sendMail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_966ib6c",
        "template_py8ry2q",
        form.current,
        "SRe-aZRAu1gAxsERz"
      )
      .then(() => {
        toast.success("message sent"),
          () => {
            toast.error("something went wrong");
          };
      });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28 "
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

      <form
        ref={form}
        onSubmit={sendMail}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={500}
          placeholder="Your email"
          name="email"
          id="email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
          id="message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit <FaPaperPlane />
        </button>
      </form>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
      />
    </motion.section>
  );
};
export default ContactSection;
