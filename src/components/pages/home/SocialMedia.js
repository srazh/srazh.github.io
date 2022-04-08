import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";


function SocialMedia() {
  return (
    <ul className="home-about-social-links">
        <li className="social-icons">
            <a
            href="https://github.com/srazh"
            className="icon-color home-social-icons"
            >
                <AiFillGithub className="social-icon" />            
            </a>
        </li>
        <li className="social-icons">
            <a
            href="https://www.linkedin.com/in/sarah-zhang-74b879103/"
            className="icon-color home-social-icons"
            >
                <FaLinkedinIn className="social-icon" />            
            </a>
        </li>
        <li className="social-icons">
        <a
          href="mailto:zhang.sarah@northeastern.edu"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
        <li className="social-icons">
            <a
            href="https://www.instagram.com/sarahhzhang_"
            className="icon-color home-social-icons"
            >
                <AiFillInstagram className="social-icon" />            
            </a>
        </li>
       


        </ul>

  );
}
export default SocialMedia;