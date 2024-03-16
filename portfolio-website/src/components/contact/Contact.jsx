import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';

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
        <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="section__title">Fale comigo!</h2>
        <span className="section__subtitle">Entrar em contato</span>
        </motion.div>
        <ToastContainer toastStyle={{ color: "white", backgroundColor: "#212121" }}/>
        <div className="contact__container container grid">
          <div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ x: [-50, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="contact__information">
              <i class="uil uil-phone contact__icon"></i>

              <div>
                <h3 className="contact__title">Me ligue</h3>
                <span className="contact__subtitle">+55 (16) 98103-4830</span>
              </div>
            </div>

            <div className="contact__information">
              <i class="uil uil-envelope contact__icon"></i>
              <div>

                <h3 className="contact__title">Envie um e-mail</h3>
                <span className="contact__subtitle">eduardotimossi1101@hotmail.com</span>
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
              whileInView={{ x: [50, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
          <form ref={form} action='' onSubmit={sendEmail} className="contact__form grid">
              
                
              <div className="contact__row">
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    id="teste"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="contact__row">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Your phone number"
                    required
                  />
                  <input type="email" placeholder="Email" required />
                </div>

                <div className="contact__row">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="contact__button">
                 
                </div>
                <button
                    className="contact-cta"
                    type="submit"
                    onClick={sendNotify}
                  >
                    Send
                  </button>
              </form>
            </motion.div>
          
        </div>
    </section>
  )
}

export default Contact