"use client";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { useRef } from "react";
type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  github,
  link,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <div className="flex flex-row gap-2 space-x-8 align-bottom mt-2">
              <Link
                href={github}
                target="_blank"
                className="bg-white text-[1.5rem] text-gray-700 p-3 flex items-center gap-2 rounded-full border border-black/10 hover:bg-transparent active:scale-[1.15] transition 
          focus:scale-[1.15] hover:scale-110   hover:text-gray-950"
              >
                <BsGithub
                  size={30}
                  className="transition-transform cursor-pointer hover:-translate-y-1"
                />
              </Link>
              <Link
                href={link}
                target="_blank"
                className="bg-white text-[1.2rem] text-gray-700 p-3 flex items-center gap-2 rounded-full border border-black/10 hover:bg-transparent active:scale-[1.15] transition 
          focus:scale-[1.15] hover:scale-110   hover:text-gray-950  "
              >
                <BsArrowUpRightSquare
                  size={30}
                  className="transition-transform cursor-pointer hover:-translate-y-1 "
                />
              </Link>
            </div>
          </div>

          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href={link}>
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              width={300}
              height={300}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:


        group-even:right-[initial] group-even:-left-40"
            />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;