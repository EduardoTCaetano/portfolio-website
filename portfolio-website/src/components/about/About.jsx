import React from "react";
import eu from "../../assets/FotoPerfil.jpeg";
import MyCv from "../about/EduardoCaetano-Currículo.pdf";
import { useState } from "react";
import { motion } from "framer-motion";

import "./about.css";

const About = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <section className="about section" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section__title">Sobre mim</h2>
        <span className="section__subtitle">Minha introdução</span>
      </motion.div>

      <div className="about__container container grid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-20, 0], opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={eu} alt="" className="about__img" />
        </motion.div>

        <div className="about__data">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [20, 0], opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about__description">
              Cursando atualmente o 2º ano superior do curso (AMS) em Analise e
              Desenvolvimento de Sistemas na instituição Fatec Taquaritinga,
              tendo já concluido o ensino tecnico em desenvolvimento de sistemas
              na instituição Etec/Fatec Taquaritinga.
            </p>
            <div className="about__info">
              <div className="about__info-title-bg">
                <span className="about__info-title">4+</span>
                <span className="about__info-name">
                  Anos <br /> estudando{" "}
                </span>
              </div>
              <div className="about__info-title-bg">
                <span className="about__info-title">2+</span>
                <span className="about__info-name">
                  Projetos <br /> WebAPI{" "}
                </span>
              </div>
              <div className="about__info-title-bg">
                <span className="about__info-title">Fatec</span>
                <span className="about__info-name">Taquaritinga</span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                href={MyCv}
                download="EduardoCaetano-Currículo.pdf"
                target="iframe_download"
                className="button button--flex"
              >
                Baixar CV <i class="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
