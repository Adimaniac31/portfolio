import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Projects = ({ title, description, githubUrl, deployedUrl, techStack }) => {
  return (
    <div
      className="p-6 bg-background-light shadow-md rounded-lg mb-4"
    >
      {/* Title */}
      {title ? (
        <h2 className="text-heading-primary text-xl font-bold mb-2">
          {title}
        </h2>
      ) : (
        <p className="text-text-muted">Project title not available</p>
      )}

      {/* Description */}
      {description ? (
        <p className="text-text-secondary mb-4">{description}</p>
      ) : (
        <p className="text-text-muted">Description not provided</p>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 ? (
        <div className="mb-4">
          <h3 className="text-heading-secondary text-lg font-semibold">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="px-2 py-1 text-sm text-text-primary bg-gray-200 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-text-muted">No tech stack specified</p>
      )}

      {/* Links with Icons */}
      <div className="flex space-x-4 mt-4">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-button-primary underline hover:text-accent-teal transition"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        ) : (
          <span className="text-text-muted">GitHub URL not available</span>
        )}

        {deployedUrl ? (
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-button-primary underline hover:text-accent-teal transition"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        ) : (
          <span className="text-text-muted">Live demo not available</span>
        )}
      </div>
    </div>
  );
};

Projects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubUrl: PropTypes.string,
  deployedUrl: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};

Projects.defaultProps = {
  title: "",
  description: "",
  githubUrl: "",
  deployedUrl: "",
  techStack: [],
};

export default Projects;

