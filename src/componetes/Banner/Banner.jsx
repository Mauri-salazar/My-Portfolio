import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import  TrackVisibility  from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { Container, Row , Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import logoImg from '../../assets/img/logoFloat.svg';

import 'animate.css';
import './banner.css';

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "software", "Developer" , "front-end", "back-end"]
  const period = 200;

  useEffect(() => {
    let ticker = setInterval( () => {
      tick();
    },delta);

    return () => { clearInterval(ticker) };
  },);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let upDatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length +1);

    setText(upDatedText);

  if(!isDeleting && upDatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
  } else if(isDeleting && upDatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
}

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className='aling-items-center'>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className='tagline'>Bienvenido a mi Portafolio</span>
                    <h1>{`¡Hola! Soy Mauricio`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["software","developer" , "front-end", "back-end"]'><span className="wrap">{text}</span></span></h1>
                    <p>¿Quien soy?
                    - Desarrollador Full Stack, con conocimientos aplicables a proyectos webs, a realizarse de forma escalable y modularizados para optimizar de mejor manera el trabajo en equipo..
                    </p>
                    <HashLink to='#connect' >
                      <button>Contactame <ArrowRightCircle size={25} /></button>
                    </HashLink>
                  </div>
                }
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={logoImg} alt='Header Img' />
                  </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  )
};
