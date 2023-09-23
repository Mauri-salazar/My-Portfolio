import React, { useRef, useState } from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../../assets/img/contact-img.svg';
import emailJs from '@emailjs/browser'

import './contact.css';
import 'animate.css';
import { FormattedMessage } from 'react-intl';

export const Contact = () => {
  
  const [buttonText, setButtonText] = useState('Send');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Pending..'); 

    emailJs.sendForm('service_3kfp76r','template_gf8ir8b',e.target,'udLtDZ_TCph6lDgpr')
    .then( response => console.log(response) )
    .catch(error => console.log(error))    
    setButtonText('Send');
    e.target.reset();

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <TrackVisibility>
              { ({ isVisible }) =>
                  <img
                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                    src={contactImg}
                    alt="Contact Us"
                  />
              }
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2><FormattedMessage id='app.contact.title' /></h2>
                    <form onSubmit={handleSubmit}>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Full name"
                          name='user_name'
                          autoComplete='off'
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Account reason contact"
                          name='message'
                        >
                        </textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
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
