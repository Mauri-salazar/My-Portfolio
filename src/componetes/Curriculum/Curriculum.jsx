import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Myfto from "../../assets/img/MYFOTO.jpeg";
import MyCv from "../../assets/cv/CV_Mauricio_Salazar_Web_Developer.pdf"

import './curriculum.css';

export const Curriculum = () => {

  return (
    <section className="curriculum" id="curriculum">
      <Container>
        <Row>
          <Col>
              <div className="port">
                <img src={Myfto} alt="Img not found"  />
                <h2>Mauricio Salazar </h2>
                  <p>*Full Stack Developer </p>
                  <p> *Tucuman , Argentina </p>
              </div>
              <div className="icons">
                <a href='https://www.linkedin.com/in/mauricio-alexandro-salazar-acu%C3%B1a-a402a5247/'><i className="bi bi-linkedin"></i></a>
                <a href='https://github.com/Mauri-salazar'><i class="bi bi-github"></i></a>
                <a href='https://mail.google.com/mail/u/1/#inbox'><i class="bi bi-envelope-fill"></i></a>
                <a href={MyCv} download='cv.pdf'><i class="bi bi-filetype-pdf"></i></a>
              </div>
              <div className="idioma">
                <h2>IDIOMAS</h2>
                  <p>* Español </p>
                  <p>* Ingles</p>
              </div>
          </Col>
          <Col>
              <div className="tecno">
                <h2>TECNOLOGIAS</h2>
                  <p>* HTML / Node Js</p>
                  <p>* CSS / Express</p>
                  <p>* JavaScript / Sequelize</p>
                  <p>* Typescript / React</p>
                  <p>* Redux / PostgreSql</p>
                  <p>* Bootstrap</p>
              </div>
              <div className="skills">
                <h2>HABILIDADES</h2>
                  <p>* Aprendizaje continuo</p>
                  <p>* Comunicación efectiva</p>
                  <p>* Mentalidad de crecimiento</p>
                  <p>* Trabajo en equipo</p>
                  <p>* Trabajo en entorno multiculturales</p>
                  <p>* Inteligencia emocional</p>
              </div>
          </Col>
          <Col className="academy-expe">
              <div className="academy">
                <h2>FORMACION ACADEMICA</h2>
                  <p>* Full Stack Web Developer Henry  2021-2022-Bootcam con mas de 800 horas de cursado teorico-practico</p>
                  <p>* Ingles Iniciacion </p>
                  <p>* React</p>
              </div>
              <div className="expe">
                <h2>EXPERIENCIA LABORAL</h2>
                  <p>* Henry Bootcam-Teach Assist
                    01-2022/05-2022, Buenos Aires, Argentina. Coordinar la asistencia de los estudiantes durante su trayecto en elbootcamp, planificar, desarrollar actividades y resolver dudas. Desarrollo de herramientas internas.
                  </p>
                  <p>* Principalmente en el ámbito académico. estudio licenciatura en sistemas donde aprendí muy buenas bases en algoritmos y en el manejo de estructura de datos.</p>
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
