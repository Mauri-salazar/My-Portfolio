import React, { useState } from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../../assets/img/contact-img.svg';
import emailJs from '@emailjs/browser'

import './contact.css';
import 'animate.css';


export const Contact = () => {

  const [buttonText, setButtonText] = useState('Enviar');
  const [input, setInput] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...');

    emailJs.sendForm('service_jar12r5','template_m2uxd6j',e.target,'udLtDZ_TCph6lDgpr')
    .then( response => console.log(response) )
    .catch(error => console.log(error))
    setButtonText('Enviado');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <TrackVisibility>
              { ({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Contacta Conmigo</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Primer Nombre" name='user_name' autoComplete='off' />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text"  placeholder="Apellido" name='user_last_name' autoComplete='off'/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Correo Electronico"  name='user_email' autoComplete='off'/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Telefono"  name='user_phone' autoComplete='off' />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6"  placeholder="Motivo de Contacto" name='user_message'></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                    </form>
                  </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
