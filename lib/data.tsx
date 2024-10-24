import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import bankImg from "/assets/bank.png";
// import mshopImg from "/assets/mShop.png";
// import cryptoImg from "/assets/crypto.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "iTrends",
    title: "Front-End Developer",
    location: "Ibadan, Nigeria",
    description:
      " I Oversaw STEM Education projects with teammates, build company road map for specific short term projects and also evaluate project progress for team members.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2022 - March 2023",
  },
  {
    company: "Platformlead Limited",
    title: "Front-End Developer and Instructor",
    location: "Ibadan, Nigeria",
    description:
      "As a frontend developer, I played a pivotal role in designing and implementing user interfaces that captivate and engage users. My responsibilities encompassed a range of key areas, demonstrating my commitment to delivering exceptional web experiences and also Create and maintain comprehensive course materials, including lesson. ",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ventrack",
    description: "web-based accounting software, which manage inventories, invoicing, receipt bookkeeping, and point-of-sale applications.",
    tags: ["reactJS", "redux", "tailwindCSS"],
    imageUrl: "/assets/projects/ventrack.png",
    github: "https://github.com/wasami-martins",
    link: "https://ventetrack.com/",
  },
  {
    title: "Plitlearn ICT",
    description: "Developed a comprehensive website showcasing services, courses, pricing, and more.",
    tags: ["nextjs","reactJS", "typeScript", "tailwindCSS"],
    imageUrl: "/assets/projects/plitlearn.png",
    github: "https://github.com/wasami-martins",
    link: "https://plitlearn.com/",
  },
  {
    title: "PlatformLead",
    description: "Developed a comprehensive website showcasing services by platformlead limited.",
    tags: ["nextjs","reactJS", "typeScript", "tailwindCSS"],
    imageUrl: "/assets/projects/platform.png",
    github: "https://github.com/wasami-martins",
    link: "https://platformlead.com/",
  },
  {
    title: "MyRealquotes",
    description: "Developed an insurance website for lead generation.",
    tags: ["reactJS","tailwindCSS", "zustand"],
    imageUrl: "/assets/projects/realQ.png",
    github: "https://github.com/wasami-martins",
    link: "https://www.myrealquotes.com/",
  },
  {
    title: "Easy Property",
    description: "Developed a rental website for a real estate business.",
    tags: ["reactJS","tailwindCSS", "zustand"],
    imageUrl: "/assets/projects/easy.png",
    github: "https://github.com/wasami-martins",
    link: "https://easy-properties.vercel.app/",
  },
  {
    title: "Nevo Clothing",
    description: "A unisex boutique ecommerce web app.",
    tags: ["reactJS", "Context Api", "CSS"],
    imageUrl: "/assets/projects/nevo-clothing.png",
    github: "https://github.com/wasami-martins/nevo-clothing",
    link: "https://nevo-clothing.vercel.app/",
  },
  {
    title: "Crypto Hub",
    description: "A crypto market app for showing coin rates",
    tags: ["React", "CSS"],
    imageUrl: "/assets/projects/crypto.png",
    github: "https://github.com/wasami-martins/mShop",
    link: " https://crypto-hubs.netlify.app/",
  },
  {
    title: "mShop",
    description: "A multipurpose e-commerce online store",
    tags: ["React", "Redux", "CSS"],
    imageUrl: "/assets/projects/mShop.png",
    github: "https://github.com/wasami-martins/mShop",
    link: "https://mshops.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;
