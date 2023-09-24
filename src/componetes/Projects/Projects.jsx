import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container , Row , Col , Tab , Nav } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import E_commerce from '../../assets/img/e-commerce.png';
import to_Do_List from '../../assets/img/to-do-list.png';
import imgFon from '../../assets/img/color-sharp2.png';

import 'animate.css';
import './projects.css';

export const Projects = () => {


  return (
    <section  className='projects' id='projects'>
      <Container>
        <div className='presentation'>
          <h2><FormattedMessage id='app.projects.title'/></h2>
          <p><FormattedMessage  id='app.projects.info'/></p>    
        </div>
        <Row className='row'>
          <Col className='col-6'>
            <div className='e-commerce'>
              <figure>
                <a href='https://shopig-ecommerce.netlify.app/'><img src={E_commerce} alt=''/></a>
              </figure>
              <figcaption>
                <div>  
                  <h2><FormattedMessage  id='app.projects.e-commerce.title' /></h2>
                  <a href='https://github.com/Mauri-salazar/E-commerce-app'><i className="bi bi-github icon-e-commerce"></i></a>
                </div>
                <p><FormattedMessage id='app.projects.e-commerce.info' /></p>
              </figcaption>
            </div>
          </Col>
          <Col className='col-6'>
            <div className='to-do-list'>
                <figure>
                  <a href=' https://mauri-salazar.github.io/to-do-list/'><img src={to_Do_List} alt=''/></a>
                </figure>
                <figcaption>
                  <div> 
                    <h2><FormattedMessage id='app.projects.to-do-list.title' /></h2>
                    <a href='https://github.com/Mauri-salazar/to-do-list'><i className="bi bi-github icon-todo"></i></a> 
                  </div>
                  <p><FormattedMessage id='app.projects.to-do-list.info' /></p>
                </figcaption>
              </div>
          </Col>
        </Row>
      </Container>
      <img src={imgFon} alt='img not found' className='background-image-right' />
    </section>
  )
};


