import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import React from "react";

import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
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
