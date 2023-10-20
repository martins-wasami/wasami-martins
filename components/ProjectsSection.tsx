"use client";

import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSection";

import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const ProjectsSection = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
