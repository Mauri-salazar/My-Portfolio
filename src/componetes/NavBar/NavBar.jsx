import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter  as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navbar.css';
import { FormattedMessage } from "react-intl";
import { Context } from '../Wapper/Wapper';

export const NavBar = () => {

  const context = useContext(Context);

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }


    window.addEventListener('scroll',onScroll);

    return window.removeEventListener('scroll',onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar  expand="md" className={ scrolled ? 'scrolled' : ''}>
        <Container>
            <select
              value={context.locale}
              onChange={context.selectLanguage}
              className='int'
            >
              <option value='es'>Spanish</option>
              <option value='en'>English</option>
            </select>

            <Navbar.Brand href="#home" className='brand'>
                <i className="bi bi-house-door"></i>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                          <Nav.Link
                            href="#home"
                            className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={ () => onUpdateActiveLink('home')}
                          >
                            <FormattedMessage id='app.navbar.home' />
                          </Nav.Link>
                          <Nav.Link
                            href="#skills"
                            className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={ () => onUpdateActiveLink('skills')}
                          >
                            <FormattedMessage id='app.navbar.skills' />
                          </Nav.Link>

                          <Nav.Link
                            href="#curriculum"
                            className={ activeLink === 'Curriculum' ? 'active navbar-link' : 'navbar-link'}
                            onClick={ () => onUpdateActiveLink('Curriculum')}
                          >
                            <FormattedMessage id='app.navbar.projects' />
                          </Nav.Link>
                          <Nav.Link
                            href="#projects"
                            className={ activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={ () => onUpdateActiveLink('Projects')}
                          >
                            <FormattedMessage id='app.navbar.resume' />
                          </Nav.Link>
                  </Nav>
                  <span className='navbar-text'>
                          <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/mauricio-alexandro-salazar-acu%C3%B1a-a402a5247/'>
                                  <i className="bi bi-linkedin"></i>
                                </a>
                          </div>
                          <HashLink to='#connect'>
                                <button className='vvd'><span><FormattedMessage id='app.navbar.contact'/></span></button>
                          </HashLink>
                    </span>
                </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
    //  <Nav.Link
    //   href="#projects"
    //   className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
    //   onClick={ () => onUpdateActiveLink('projects')}
    // >
    //   <FormattedMessage id='app.navbar.projects' />
    // </Nav.Link>