import React from "react";
import "./portfolio.css";
import LogoPortfolio from "../../assets/Eduardo-Portfolio.jpeg";
import BwShop from "../../assets/BWShop.jpeg";
import BTech from "../../assets/BlitzTech.jpg";
import eShop from "../../assets/eShop.jpg";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section__title">Meu Portfólio</h2>
        <span className="section__subtitle">Meus projetos</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={LogoPortfolio} alt="Logo Portfolio" />
            </div>
            <h3>Portfolio</h3>
            <a
              href="https://github.com/EduardoTCaetano/Portfolio"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="btn btn-info" data-modal-target="portfolioModal">
              Mais Informações
            </div>
          </article>
          <div id="portfolioModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <p>
                Eu desenvolvi um projeto de portfólio utilizando HTML5, CSS3,
                JavaScript, React, Bootstrap e jQuery. O objetivo foi criar um
                site visualmente atraente, responsivo e interativo para
                apresentar minhas habilidades e trabalhos anteriores.
              </p>
            </div>
          </div>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={BwShop} alt="Ecommerce BwShop" />
            </div>
            <h3>Ecommerce BwShop</h3>
            <a
              href="https://github.com/EduardoTCaetano/ProjetoIntegrador-AMS"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="btn btn-info" data-modal-target="bwshopModal">
              Mais Informações
            </div>
          </article>
          <div id="bwshopModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <p>
                O projeto "Projeto Integrador" no GitHub é um exemplo de
                aplicação prática desenvolvida para consolidar conhecimentos
                adquiridos em um curso. Utiliza as seguintes tecnologias: .NET e
                C#: Para o desenvolvimento backend. ASP.NET Core: Para criar a
                API e gerenciar o backend. Entity Framework Core: Para
                manipulação de dados. Bootstrap: Para a interface do usuário.
                Angular: Para criar uma experiência de usuário dinâmica. O
                objetivo é integrar várias tecnologias e práticas em um único
                projeto, demonstrando habilidades em desenvolvimento de software
                e criação de soluções completas.
              </p>
            </div>
          </div>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={BTech} alt="BlitzTech" />
            </div>
            <h2>Em andamento</h2>
            <h3>BlitzTech</h3>
            <a
              href="https://github.com/EduardoTCaetano/BlitzTech"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="btn btn-info" data-modal-target="blitzTechModal">
              Mais Informações
            </div>
          </article>
          <div id="blitzTechModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <p>
                O projeto "BlitzTech" no GitHub é uma aplicação desenvolvida
                para criar um framework robusto e escalável para aplicações web
                modernas. Aqui está um resumo das tecnologias e objetivos:
                Tecnologias Usadas .NET 8 (NET Core Web API): Utilizado para o
                desenvolvimento do backend, proporcionando uma plataforma
                eficiente e moderna para criar APIs. C#: Linguagem principal
                para codificação do backend. Bootstrap: Framework de CSS para
                estilização e design responsivo do frontend. Angular: Framework
                para construir uma interface de usuário dinâmica e interativa.
                TypeScript: Utilizado com Angular para desenvolvimento de
                aplicações front-end robustas. Objetivo do Projeto O "BlitzTech"
                visa criar uma base sólida para o desenvolvimento de aplicações
                web modernas, integrando backend e frontend em uma estrutura
                coesa. O projeto demonstra a capacidade de construir uma
                arquitetura escalável e eficiente, combinando tecnologias de
                ponta para fornecer uma solução completa para desenvolvimento
                web.
              </p>
            </div>
          </div>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={eShop} alt="eShop" />
            </div>
            <h2>Em andamento</h2>
            <h3>eShop</h3>
            <a
              href="https://github.com/bootcampnet2024/eShop"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <div className="btn btn-info" data-modal-target="eShopModal">
              Mais Informações
            </div>
          </article>
          <div id="eShopModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <p>
                No projeto eShop, um e-commerce desenvolvido no Bootcamp 2024,
                minhas principais responsabilidades incluem: Desenvolvimento de
                Funcionalidades: Implemento novas funcionalidades e integro APIs
                externas para aprimorar o eShop. Melhoria da Interface de
                Usuário: Trabalho para tornar a interface mais intuitiva e
                responsiva, adicionando efeitos visuais e transições. Segurança
                e Autenticação: Foco na implementação de práticas de segurança e
                na configuração do sistema de autenticação. Testes e Qualidade:
                Realizo testes para garantir o bom funcionamento do sistema e
                ofereço feedback para melhorias. Colaboração e Comunicação:
                Participo ativamente do trabalho em equipe e contribuo para a
                documentação do projeto.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
