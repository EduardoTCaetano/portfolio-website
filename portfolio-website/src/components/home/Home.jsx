import React from 'react'
import './home.css'
import fotocomfundo from "../../assets/fotocomfundo.jpg";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/eduardo-timossi-caetano-5091aa231/" target="_blank" className="home__social-icon">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://wa.me/+5516981034830"  target="_blank" className="home__social-icon">
                        <i className="uil uil-whatsapp"></i>
                    </a>

                    <a href="https://github.com/EduardoTCaetano" target="_blank" className="home__social-icon">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.instagram.com/eduardo_caetano016/" className="footer__social-link" target={"_blank"}>
                     <i className="uil uil-instagram"></i>
                    </a>
                </div>

                <div class="home__img">
                <div className="home__container container grid">
                <img src={fotocomfundo} alt="" className="about__img" />
                </div>
                </div>

                <div className="home__data">
                    <h1 className="home__title">Olá, eu sou o Eduardo Caetano</h1>
                    <h3 className="home__subtitle">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="home__description">Procuro ser um profissional comprometido e motivado, ansioso para contribuir significativamente em um ambiente dinâmico e desafiador. Meu objetivo é adentrar o mercado de trabalho e desenvolver uma carreira bem-sucedida, onde posso aplicar minhas habilidades e conhecimentos de maneira eficaz.</p>
                    <a href="#contact" className="button button--flex">
                        Contate-me <i class="uil uil-message button__icon"></i> 
                    </a>
                </div>                
            </div>


            <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i> 
                    <span className="home__scroll-name">Role para baixo</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i> 
                </a>
            </div>
        </div>
    </section>
    
  )
}

export default Home