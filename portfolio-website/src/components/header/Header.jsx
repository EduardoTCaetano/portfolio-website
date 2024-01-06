import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Eduardo Caetano</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i class="uil uil-user nav__icon"></i> Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i class="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link active-link">
                <i class="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link ">
                <i class="uil uil-message nav__icon"></i> Contato
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i> 
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i> 
          </div>
        </div>
      </nav>
    </header>
    
    )
}

export default Header