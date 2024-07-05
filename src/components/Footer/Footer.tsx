import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.getInTouch}>
        <h1>Get In Touch</h1>
        <p>
          Enthusiastic recent graduate is waiting for you. Please let's talk
          about positions at your company. I will be glad to use my passion and
          cooperate with a friendly team.
        </p>
        <div className={styles.icons}>
          {/* <a href="https://www.instagram.com/kristianna_tr/">
            <CiInstagram size={45} />
          </a> */}
          <a href="https://github.com/kAutoman">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/igor-kalemba-9740a330a/">
            <CiLinkedin size={45} />
          </a>
        </div>
      </div>
      <div className={styles.email}>
        <p>
          <IoMailOutline size={40} />
        </p>
        <p>igorkalemba599@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
