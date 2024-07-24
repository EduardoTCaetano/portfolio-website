import React from "react";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [20, 0], opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Eduardo Timossi Caetano</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About me
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://github.com/EduardoTCaetano"
              className="footer__social-link"
              target={"_blank"}
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a
              href="https://wa.me/+5516981034830"
              className="footer__social-link"
              target={"_blank"}
            >
              <i className="uil uil-whatsapp"></i>
            </a>

            <a
              href="https://www.instagram.com/eduardotcaetano/"
              className="footer__social-link"
              target={"_blank"}
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/eduardo-timossi-caetano-5091aa231/"
              target="_blank"
              className="home__social-icon"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Eduardo Caetano. All rights reserved.
          </span>
        </div>
        {/* <Icons/> */}
      </footer>
    </motion.div>
  );
};

export default Footer;
