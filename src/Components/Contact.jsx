import React from "react";
import {
  FaTwitter, FaInstagram, FaGithub, FaCode, FaLinkedin, FaPhoneAlt, FaEnvelope
} from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import PropTypes from "prop-types";

const iconMap = {
  Twitter: <FaTwitter className="text-blue-400" />,
  Instagram: <FaInstagram className="text-pink-500" />,
  GitHub: <FaGithub className="text-gray-900" />,
  CodeChef: <SiCodechef className="text-orange-500" />,
  LeetCode: <SiLeetcode className="text-yellow-500" />,
  Codeforces: <SiCodeforces className="text-blue-500" />,
  LinkedIn: <FaLinkedin className="text-blue-600" />,
  Phone: <FaPhoneAlt className="text-green-500" />,
  Email: <FaEnvelope className="text-red-500" />
};

const Contact = ({ title, data }) => {
  if (!data) return null; // Conditional rendering

  return (
    <div className="flex items-center space-x-2 p-2">
      <div>{iconMap[title]}</div>
      {title === "Phone" || title === "Email" ? (
        <span className="text-text-primary">{data}</span>
      ) : (
        <a href={data} target="_blank" rel="noopener noreferrer" className="text-button-primary underline hover:text-accent-teal transition">
          {title}
        </a>
      )}
    </div>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string
};

export default Contact;
