// ProjectList.jsx
import React from "react";
import Projects from "./Projects";
import projectsData from "../Constants/Projects.json";

const ProjectList = () => {
  return (
    <div className="p-6 bg-background-light rounded-lg shadow-md mb-8">
      <h2 className="text-heading-primary text-2xl font-semibold mb-4">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.length > 0 ? (
          projectsData.map((project, index) => (
            <div key={index}>
              <Projects
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                deployedUrl={project.deployedUrl}
                techStack={project.techStack}
              />
              {/* Video Section */}
              {project.videoUrl && (
                <div className="mt-4">
                  <h3 className="text-heading-secondary text-xl font-semibold mb-2">Project Video</h3>
                  <iframe
                    width="100%"
                    height="315"
                    src={project.videoUrl}
                    title={`${project.title} Video`}
                    className="rounded-lg shadow-md"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-text-muted text-center">No projects available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
