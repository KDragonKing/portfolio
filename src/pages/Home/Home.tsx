import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home} id="top">
      <div className={styles.content}>
        <p className={styles.greeting}>
          Hello, <span>my name is</span>
        </p>
        <p className={styles.name}>
          <span>Igor</span>KALEMBAR
        </p>
        <p className={styles.position}>
          <Typewriter
            options={{
              strings: ["I am a Fullstack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>

        <p className={styles.about}>
          I have a deep passion in
          full stack development. If you need my servics
          or need a website built, get in touch.
        </p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/igor-kalemba-9740a330a/">
            <CiLinkedin />
          </a>
          <a href="https://github.com/kAutoman">
            <FaGithub />
          </a>
        </div>
        <div className={styles.buttons}>
          <div>
            <a
              className={styles.buttons__download}
              href="/Igor.pdf"
              download="Igor.pdf"
            >
              Download CV
            </a>
          </div>

          <div>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={styles.buttons__skills}
            >
              — My skills
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src="Igor.png" alt="Igor Kalembar" />
      </div>
    </div>
  );
};

export default Home;
