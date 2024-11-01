// AboutMe.jsx
import React from 'react';
import aboutMeImage from '../assets/my-image.jpeg';
import resultImage from '../assets/result.png';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-background-light rounded-lg shadow-md mb-8">
      {/* Text Section */}
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className="text-heading-primary text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-text-primary mb-2">
          Hello, I'm <strong>Aditya Bhivgade</strong>, a sophomore at the Indian Institute of Information Technology.
          I'm passionate about gaining hands-on experience in full-stack development, and I'm eager to collaborate with your team to further my education and contribute effectively.
        </p>

        <h3 className="text-heading-secondary text-xl font-semibold mb-2">Education</h3>
        <p className="text-text-primary mb-2">
          Bachelor of Technology in Computer Science and Engineering (2022-2026) <br />
          Indian Institute of Information Technology, Nagpur (CGPA: 8.02)
        </p>

        <h3 className="text-heading-secondary text-xl font-semibold mb-2">Interests and Achievements</h3>
        <p className="text-text-primary mb-2">
          Curious open-source developer and interested in hackathons. <br />
          JEE percentile: 96.372 <br />
          Ranked 8420 among 5.1 lakh students in the Naukri Young Turks test in round 2 (coding) and 26000 in round 1 (aptitude).
        </p>

        <h3 className="text-heading-secondary text-xl font-semibold mb-2">Screenshot of Result</h3>
        <img
          src={resultImage}
          alt="Results Screenshot"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 md:pl-6">
        <img
          src={aboutMeImage}
          alt="Aditya Bhivgade"
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  );
};

export default AboutMe;
