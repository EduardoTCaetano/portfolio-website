import React from 'react'
import './home.css'
import photo from "../../assets/profile.png";


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social">
                    <a href="" target="_blank" className="home__social-icon">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://wa.me/+5516981034830"  target="_blank" className="home__social-icon">
                        <i className="uil uil-whatsapp"></i>
                    </a>

                    <a href="https://github.com/EduardoTCaetano" target="_blank" className="home__social-icon">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" >
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="home__blob-img" x="70" y="30" href={photo}/>
                        </g>
                    </svg>
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