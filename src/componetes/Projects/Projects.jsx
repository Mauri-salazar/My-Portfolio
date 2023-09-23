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
        <div>
          <h2><FormattedMessage id='app.projects.title'/></h2>
          <p><FormattedMessage  id='app.projects.info'/></p>
          
        </div>
        <Row>
          <Col>
            <div>
              <img src='' alt=''/>
              <h2>Title first project</h2>
              <p>description</p>
            </div>
          </Col>
          <Col>
            <img src='' alt='' />
            <h2>second </h2>
            <p>description</p>
          </Col>
        </Row>
      </Container>
      <img src={imgFon} alt='img not found' className='background-image-right' />
    </section>
  )
};


