import React from 'react'
import eu from "../../assets/eu.jpg";
import MyCv from "../about/EduardoCaetano-Currículo.pdf";

import './about.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container grid">
        <img src={eu} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">Cursando atualmente o 2º ano superior do curso (AMS) em Analise e Desenvolvimento de Sistemas na instituição Fatec Taquaritinga, tendo já concluido o ensino tecnico em desenvolvimento de sistems na instituição Etec/Fatec Taquaritinga.</p>

          <div className="about__info">
            <div className='about__info-title-bg'>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">Anos <br /> estudando </span>
            </div>

            <div className='about__info-title-bg'>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">Projetos <br /> WebAPI </span>
            </div>

            <div className='about__info-title-bg'>
              <span className="about__info-title">0</span>
              <span className="about__info-name">Anos <br /> experiência </span>
            </div>
          </div>

          <div className="about__buttons">
            <a href={MyCv} download="EduardoCaetano-Currículo.pdf" target="iframe_download" className="button button--flex">
              Baixar CV <i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About