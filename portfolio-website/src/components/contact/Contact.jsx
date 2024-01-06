import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <h2 className="section__title">Fale comigo!</h2>
        <span className="section__subtitle">Entrar em contato</span>
        <ToastContainer toastStyle={{ color: "white", backgroundColor: "#212121" }}/>
        <div className="contact__container container grid">
          <div>
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

           
          </div>
          <form ref={form} action='' onSubmit={sendEmail} className="contact__form grid">
              
              <div className="contact__inputs grid">
                
                <div className="contact__content">
                  <label htmlFor=""  className="contact__label">Nome</label>
                  <input type="text" name='name' className="contact__input" required />
                </div>

                <div className="contact__content">
                  <label htmlFor=""  className="contact__label">E-mail</label>
                  <input type="email" name='email' className="contact__input" required />
                </div>
              </div>
                <div className="contact__content">
                  <label htmlFor=""   className="contact__label">Mensagem</label>
                  <textarea type="text" name='message' id="" cols="0" rows="4" className="contact__input" required></textarea>
                </div>

                <div > 
                  <button type="submit" onClick={sendNotify}className="button button--flex">
                    Enviar
                    <i class="uil uil-message button__icon"></i>
                  </button>
                </div>
          </form>
        </div>
    </section>
  )
}

export default Contact