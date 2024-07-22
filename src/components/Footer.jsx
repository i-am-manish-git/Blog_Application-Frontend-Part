import React from 'react';
import { NavLink as ReactLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
        {/* Contains three columns, each occupying 4 out of 12 grid columns (md="4") */}
          <Col md="4">
            <h5>About Us</h5>
            <p>
              Founded in 2024, MyBlog has come a long way from its beginnings. When we first started out, our passion for sharing knowledge drove us to start this blog. We now serve readers all over the world and are thrilled to turn our passion into our own website.
            </p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <Nav vertical>
              <NavItem>
                <NavLink tag={ReactLink} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4"> 
            <h5>Connect With Us</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="https://www.facebook.com" target="_blank">Facebook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.twitter.com" target="_blank">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com" target="_blank">Instagram</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.youtube.com" target="_blank">YouTube</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="text-center">
            <p className="footer-text">© 2024 MyBlog. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
