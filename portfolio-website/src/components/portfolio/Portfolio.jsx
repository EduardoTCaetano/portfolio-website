import React from 'react'
import './portfolio.css'
import LogoPortfolio from "../../assets/Eduardo-Portfolio.jpeg";
import BwShop from "../../assets/BWShop.jpeg";
import { motion } from 'framer-motion';


const Portfolio = () => {
  return (
    
    <section className="portfolio section" id="portfolio">
    <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-10, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2 className="section__title">Meu Portfólio</h2>
      <span className="section__subtitle">Meus projetos</span>
    </motion.div>

    <motion.div initial={{ opacity: 0 }} whileInView={{ y: [10, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LogoPortfolio} alt=''></img>
          </div>
          <h3>Portfolio Eduardo Caetano</h3>
          <a href='https://github.com/EduardoTCaetano/Portfolio' className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={BwShop} alt=''></img>
          </div>
          <h3>Ecommerce BwShop</h3>
          <a href='https://github.com/EduardoTCaetano/ProjetoIntegrador-AMS' className='btn' target='_blank'>Github</a>
        </article>
      </div>    
      </motion.div>
    </section>
    
  )
}
export default Portfolio