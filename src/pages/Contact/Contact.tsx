import React from "react";
import { CiLinkedin, CiMap } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import styles from "./Contact.module.scss";
import { FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.heading}>Contact</h1>
      <h3 className={styles.contactheading}>
        ASK ME <span>Whatever You Want</span>
      </h3>
      <div className={styles.contactGrid}>
        <div className={styles.socialMedia}>
          <div className={styles.media}>
            <p className={styles.icon}>
              <CiMap size={30} />
            </p>
            <div className={styles.contactContent}>
              <h3>Address</h3>
              <p>Warsaw, Poland</p>
            </div>
          </div>
          <div className={styles.media}>
            <p className={styles.icon}>
              <GoMail size={26} />
            </p>
            <div className={styles.contactContent}>
              <h3>Email</h3>
              <a href="mailto:igorkalemba599@gmail.com">
                igorkalemba599@gmail.com
              </a>
            </div>

          </div>

          <div className={styles.media}>
          <p className={styles.icon}>
              <BiPhone size={26} />
            </p>
            <div className={styles.contactContent}>
                <h3>Phone</h3>
                <a href="tel:+48 71 735 3211">
                +48 71 735 3211
                </a>
              </div>
          </div>

          <div className={styles.media}>
            <p className={styles.icon}>
              <IoPersonOutline size={26} />
            </p>
            <div className={styles.contactContent}>
              <h3>Availability</h3>
              <p>Available Right Now</p>
            </div>
          </div>
          <div className={styles.mediaIcons}>
            <h2>Social media</h2>
            <div className={styles.icons}>
              <div>
                <p>LinkedIn:</p>
                <a href="https://www.linkedin.com/in/igor-kalemba-9740a330a/">
                  <CiLinkedin size={33} />
                </a>
              </div>
              <div>
                <p>GitHub:</p>
                <a href="https://github.com/kAutoman">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cv}>
          <img src="/images/resume.png" alt="Resume" />
          <a
            className={styles.buttonDownload}
            href="/Igor.pdf"
            download="Igor.pdf"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
