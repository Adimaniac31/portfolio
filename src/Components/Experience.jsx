// Experience.jsx
import React from "react";
import experienceData from "../Constants/Experience.json";

const Experience = () => {
  return (
    <div className="p-6 bg-background-light rounded-lg shadow-md mb-8">
      <h2 className="text-heading-primary text-2xl font-semibold mb-4 text-left">Experience</h2>
      <div className="space-y-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-heading-secondary text-xl font-semibold">{exp.title} at {exp.name}</h3>
            <h4 className="text-text-muted">{exp.role}</h4>
            <p className="text-text-primary">{exp.description}</p>
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-button-primary underline hover:text-accent-teal"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
