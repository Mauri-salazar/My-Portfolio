import React from 'react';
import { Container , Row , Col , Tab , Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import imgFon from '../../assets/img/color-sharp2.png';
import { ProjectCard } from '../ProjectCard/ProjectCard';

import 'animate.css';
import './projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section  className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              { ({isVisible}) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Builds the app for production to the build folder.
                    It correctly bundles React in production mode and optimizes the build for the best performance.</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                      <Nav variant='pills' className='className="nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey='first'>tab 1</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey='first'>
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
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
