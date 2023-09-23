import React from 'react';
import { FormattedMessage } from "react-intl";
import { Container , Row , Col , Tab , Nav } from 'react-bootstrap';
import E_commerce from '../../assets/img/e-commerce.png';
import to_Do_List from '../../assets/img/to-do-list.png';
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
              <figure>
                <a href='https://shopig-ecommerce.netlify.app/'><img src={E_commerce} alt=''/></a>
              </figure>
              <figcaption>
                <h2>E-commerce</h2>
                <p></p>
              </figcaption>
            </div>
          </Col>
          <Col>
            <div>
                <figure>
                  <a href=' https://mauri-salazar.github.io/to-do-list/'><img src={to_Do_List} alt=''/></a>
                </figure>
                <figcaption>
                  <h2>To-Do-List</h2>
                  <p></p>
                </figcaption>
              </div>
          </Col>
        </Row>
      </Container>
      <img src={imgFon} alt='img not found' className='background-image-right' />
    </section>
  )
};


