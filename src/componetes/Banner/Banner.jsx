import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import  TrackVisibility  from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { Container, Row , Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import logoImg from '../../assets/img/logoFloat.svg';

import 'animate.css';
import './banner.css';
import { FormattedMessage } from 'react-intl';

export const Banner = () => {

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className='aling-items-center'>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className='tagline'><FormattedMessage id='app.banner.title'/></span>
                    <h1><FormattedMessage id='app.banner.name'/> <span className="txt-rotate"><FormattedMessage id='app.banner.role'/></span></h1>
                    <p><FormattedMessage id='app.banner.description'/></p>
                    <HashLink to='#connect' >
                      <button><FormattedMessage id='app.banner.contact'/> <ArrowRightCircle size={25} /></button>
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
