import React from 'react'
import eu from "../../assets/eu.jpg";

import './about.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container grid">
        <img src={eu} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium fugiat nemo blanditiis atque optio, nesciunt ad nulla harum deleniti nam velit, tenetur aut dignissimos cum eveniet placeat iure labore ipsa. lore</p>

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
            <a download="" href="" className="button button--flex">
              Baixar CV <i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About