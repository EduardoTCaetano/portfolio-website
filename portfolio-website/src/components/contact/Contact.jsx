import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ct2q2zs",
        "template_i0teich",
        form.current,
        "ADgsoomO1rFSctmHx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const sendNotify = () => {
    toast.dark("Obrigado !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section className="contact section" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section__title">Fale comigo!</h2>
        <span className="section__subtitle">Entrar em contato</span>
      </motion.div>
      <div className="contact__container container grid">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-20, 0], opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact__information">
              <i class="uil uil-phone contact__icon"></i>

              <div>
                <h3 className="contact__title">Me ligue</h3>
                <span className="contact__subtitle">+55 (16) 98203-4830</span>
              </div>
            </div>

            <div className="contact__information">
              <i class="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Envie um e-mail</h3>
                <span className="contact__subtitle">
                  eduardotimossi1201@hotmail.com
                </span>
              </div>
            </div>
            <div className="contact__information">
              <i class="uil uil-comment-search contact__icon"></i>
              <div>
                <h3 className="contact__title">Me mande uma mensagem </h3>
                <span className="contact__subtitle">Escreva abaixo</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [20, 0], opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form
            ref={form}
            action=""
            onSubmit={sendEmail}
            className="contact__form grid"
          >
            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder="Primeiro Nome"
                id="teste"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Ultimo Nome"
                required
              />
            </div>

            <div className="contact__row">
              <input
                type="number"
                name="contact"
                id=""
                placeholder="Número de telefone"
                required
              />
              <input type="email" placeholder="Email" name="email" required />
            </div>

            <div className="contact__row">
              <textarea
                placeholder="Mensagem"
                name="message"
                required
              ></textarea>
            </div>
            <div className="contact__button"></div>
            <button className="contact-cta" type="submit" onClick={sendNotify}>
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
