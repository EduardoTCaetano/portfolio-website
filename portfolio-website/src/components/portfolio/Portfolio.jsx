import React from 'react'
import './portfolio.css'
import './swiper-bundle.min.css'
import LogoPortfolio from "../../assets/Eduardo-Portfolio.jpeg";
import BwShop from "../../assets/BWShop.jpeg";


const Portfolio = () => {
  return (
    
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Meu Portfólio</h2>
      <span className="section__subtitle">Meus projetos</span>

      <div className="portfolio__container container swiper-container">
        
        <div class="swiper-wrapper">
                      {/* Projeto 1 */}
          <div className="portfolio__content grid swiper-slide">
            <img src={LogoPortfolio} alt="" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Portfólio</h3>
              <p className="portfolio__description">Este é meu projeto portfólio desenvolvido com o framework ReactJs</p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
              
              <a href="https://github.com/EduardoTCaetano/Portfolio" target='_blank' className="button button--flex button--small portfolio__button">
                GitHub
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>

          <div className="portfolio__content grid swiper-slide">
            <img src={BwShop} alt="" className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">BwShop</h3>
              <p className="portfolio__description"> Projeto integrador do 4º AMS em Analise e Desenvolvimento de Sistemas com o Profº Jose Ricardo Sartor</p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo
                <i class="uil uil-arrow-right button__icon"></i>
              </a>

              <a href="https://github.com/EduardoTCaetano/ProjetoIntegrador-AMS" target='_blank' className="button button--flex button--small portfolio__button">
                GitHub
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev">
        <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      
    </section>
    
  )
}
export default Portfolio