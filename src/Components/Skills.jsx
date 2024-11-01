// Skills.jsx
import React from "react";
import skillsData from "../Constants/skills.json";

const Skills = () => {
  return (
    <div className="p-6 bg-background-light rounded-lg shadow-md mb-8">
      <h2 className="text-heading-primary text-2xl font-semibold mb-4 text-left">My Skills</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}${skill.image}`}
              alt={skill.name}
              className="h-16 w-16 sm:h-24 sm:w-24 object-contain mb-2"
            />
            <span className="text-text-primary text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
