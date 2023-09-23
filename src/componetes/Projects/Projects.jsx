import React from 'react';
import { FormattedMessage } from "react-intl";
import { Container , Row , Col , Tab , Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import imgFon from '../../assets/img/color-sharp2.png';

import 'animate.css';
import './projects.css';

export const Projects = () => {


  return (
    <section  className='projects' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2><FormattedMessage id='app.projects.title'/></h2>
                    <p><FormattedMessage  id='app.projects.info'/></p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                      <Nav variant='pills' className='className="nav-pills mb-5 justify-content-center align-items-center"' id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey='first'>tab 1</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey='first'>
                          <Row>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            tab second
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            tab third
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={imgFon} alt='img not found' className='background-image-right' />
    </section>
  )
};


