import React from 'react';
import { Container , Row , Col , Tab , Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import imgFon from '../../assets/img/color-sharp2.png';


import 'animate.css';
import './projects.css';

export const Projects = () => {

  // const projects = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // ];

  return (
    <section  className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Proyectos</h2>
                    <p>estos son mis Proyectos
                    It correctly bundles React in production mode and optimizes the build for the best performance.</p>
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


