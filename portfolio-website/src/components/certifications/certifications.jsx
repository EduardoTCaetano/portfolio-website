import React from "react";
import "./certifications.css";
import NETCORE from "../../assets/net.jpg";
import SAPSD from "../../assets/sapsd.jpg";
import SAP from "../../assets/sap.jpg";
import BDS000 from "../../assets/bds000.jpg";
import OperadorPC from "../../assets/OperadorPC.jpg";
import ComputacaoEmNuvem from "../../assets/ComputacaoEmNuvem.jpg";

import { motion } from "framer-motion";

const Certificacoes = () => {
  return (
    <section className="portfolio section" id="certifications">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section__title">Certificações</h2>
        <span className="section__subtitle">Minhas certificações</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={NETCORE} alt="Logo Portfolio" />
            </div>
            <h3>BootCamp .NET Core</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal1">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal1" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={NETCORE} alt="Logo Portfolio" />
            </div>
          </div>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={SAPSD} alt="Logo Portfolio" />
            </div>
            <h3>SAP S/4 HANA - SD</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal2">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal2" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={SAPSD} alt="Logo Portfolio" />
            </div>
          </div>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={SAP} alt="Logo Portfolio" />
            </div>
            <h3>SAP S/4 HANA</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal3">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal3" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={SAP} alt="Logo Portfolio" />
            </div>
          </div>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={BDS000} alt="Logo Portfolio" />
            </div>
            <h3>BANCO DE DADOS BDS-000</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal4">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal4" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={BDS000} alt="Logo Portfolio" />
            </div>
          </div>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={ComputacaoEmNuvem} alt="Logo Portfolio" />
            </div>
            <h3>Computação em Nuvem</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal5">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal5" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={ComputacaoEmNuvem} alt="Logo Portfolio" />
            </div>
          </div>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={OperadorPC} alt="Logo Portfolio" />
            </div>
            <h3>Operador de Computador</h3>
            <div className="btn btn-info" data-modal-target="portfolioModal6">
              Ver certificado
            </div>
          </article>
          <div id="portfolioModal6" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Informações Adicionais</h2>
              <img src={OperadorPC} alt="Logo Portfolio" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificacoes;
