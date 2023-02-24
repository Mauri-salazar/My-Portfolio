import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container , Row } from "react-bootstrap";
import Myfto from "../../assets/img/MYFOTO.jpeg";
import MyCv from "../../assets/cv/CV_Mauricio_Salazar_Web_Developer.pdf"

import './curriculum.css';
import { formatMessage } from "@formatjs/intl";
import { FormattedMessage } from "react-intl";


export const Curriculum = () => {

  return (
    <section className="curriculum" id="curriculum">
      <Container>
        <Row>
          <Col>
              <div className="port">
                <img src={Myfto} alt="Img not found"  />
                <h2>Mauricio Salazar </h2>
                  <p><FormattedMessage id="app.resume.role"/></p>
                  <p> * Tucuman , Argentina </p>
              </div>
              <div className="icons">
                <a href='https://www.linkedin.com/in/mauricio-alexandro-salazar-acu%C3%B1a-a402a5247/'><i className="bi bi-linkedin"></i></a>
                <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                <a href={MyCv} download='cv.pdf'><i className="bi bi-filetype-pdf"></i></a>
              </div>
              <div className="idioma">
                <h2><FormattedMessage id='app.resume.languageTitle'/></h2>
                  <p><FormattedMessage id='app.resume.languageOne'/></p>
                  <p><FormattedMessage id='app.resume.lenguageTwo'/></p>
              </div>
          </Col>
          <Col>
              <div className="tecno">
                <h2><FormattedMessage id='app.resume.technologiesTitle'/></h2>
                  <p><FormattedMessage id='app.resume.technologiesOne'/></p>
                  <p><FormattedMessage id='app.resume.technologiesTwo'/></p>
                  <p><FormattedMessage id='app.resume.technologiesThree'/></p>
                  <p><FormattedMessage id='app.resume.technologiesFour'/></p>
                  <p><FormattedMessage id='app.resume.technologiesFive'/></p>
                  <p><FormattedMessage id='app.resume.technologiesSix'/></p>
              </div>
              <div className="skills">
                <h2><FormattedMessage id='app.resume.skillsTitle'/></h2>
                  <p><FormattedMessage id='app.resume.skillsOne'/></p>
                  <p><FormattedMessage id='app.resume.skillsTwo'/></p>
                  <p><FormattedMessage id='app.resume.skillsThree'/></p>
                  <p><FormattedMessage id='app.resume.skillsFour'/></p>
              </div>
          </Col>
          <Col className="academy-expe">
              <div className="academy">
                <h2><FormattedMessage id='app.resume.academyTitle'/></h2>
                  <p><FormattedMessage id='app.resume.academyOne'/></p>
                  <p><FormattedMessage id='app.resume.academyTwo'/></p>
              </div>
              <div className="expe">
                <h2><FormattedMessage id='app.resume.experienceTitle'/></h2>
                  <p><FormattedMessage id='app.resume.experienceOne'/></p>
                  <p><FormattedMessage id='app.resume.experienceTwo'/></p>
              </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-academy">
          </Col>
        </Row>
      </Container>
    </section>
  )
};
