import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blanks">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blanks">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blanks">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
