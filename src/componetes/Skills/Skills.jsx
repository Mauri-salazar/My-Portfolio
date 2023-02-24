import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from '../../assets/imgSkills/react-original.svg';
import skill2 from '../../assets/imgSkills/redux.svg';
import skill3 from '../../assets/imgSkills/javascript-js.svg';
import skill4 from '../../assets/imgSkills/file-type-html.svg';
import skill5 from '../../assets/imgSkills/file-type-css.svg';
import skill6 from '../../assets/imgSkills/file-type-node.svg';
import skill7 from '../../assets/imgSkills/express-original.svg';
import skill8 from '../../assets/imgSkills/sql-database-generic.svg';
import skill9 from '../../assets/imgSkills/postgresql-plain-wordmark.svg';
import skill10 from '../../assets/imgSkills/sequelize.svg';
import skill11 from '../../assets/imgSkills/git.svg';
import skill12 from '../../assets/imgSkills/github.svg';
import colorfon from '../../assets/img/color-sharp.png';

import './skills.css';
import { formatMessage } from "@formatjs/intl";
import { FormattedMessage } from "react-intl";


export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2><FormattedMessage id='app.skills.title'/></h2>
              <p><FormattedMessage id='app.skills.description'/></p>
              <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                <div className="item">
                  <img src={skill1} alt="not found img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="not found img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="not found img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="not found img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="not found img" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="not found img" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={skill7} alt="not found img" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={skill8} alt="not found img" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={skill9} alt="not found img" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={skill10} alt="not found img" />
                  <h5>Sequelize</h5>
                </div>
                <div className="item">
                  <img src={skill11} alt="not found img" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={skill12} alt="not found img" />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorfon} alt="not found img" />
    </section>
  )
};
