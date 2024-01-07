import React, { Component } from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './skills.css'


export class Skills extends Component {
  static propTypes = {}

  render() {
    return (
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Minhas skills</span>

        <div className="container experience__container">
          <div className="experience__backend">
            <h3>Desenvolvimento Backend</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small>Intermediario</small>
                  </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small>Intermediario</small>
                  </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small>Básico</small>
                  </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small>Básico</small>
                  </div>
              </article>

              
            </div>
          </div>

          <div className="experience__frontend">
            <h3>Desenvolvimento Frontend</h3>  
            <div className="experience__content">
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C#</h4>
                  <small>Intermediario</small>
                  </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NodeJS</h4>
                  <small>Básico</small>
                  </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Angular</h4>
                  <small>Básico</small>
                  </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MVC</h4>
                  <small>Básico</small>
                  </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills