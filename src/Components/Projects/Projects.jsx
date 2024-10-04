import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white mb-7 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard 
          title="Swiggy Clone"
          main="this is a Swiggy website created in React-js and used some tailwind-css for styling"
        />
     
      </div>
    </div>
  );
};

export default Projects;