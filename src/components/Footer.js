import React from 'react';
import { Container, Row } from 'reactstrap';

const Footer = () => (
  <footer>
    <Container fluid>
      <h2 className="text-center">Get in touch</h2>
      <Row className="justify-content-center">
        <a target="_blank" href="https://www.linkedin.com/in/tony-yep-721b2337/" className="icon fa-linkedin fa-lg fa-border">
        <span className="label">linkedin</span>
        </a>
        <a target="_blank" href="http://www.youtube.com/channel/UCS-pKWWh_L7wYn8U6nz-zhA" className="icon fa-youtube fa-lg fa-border">
        <span className="label">youtube</span>      
        </a>      
      </Row>
    </Container>
    <Container>
      <ul id="copyright">
        <li>&copy; Drygon Consulting Inc. All rights reserved</li>
        <li>Design & Program By: <a href="https://hjzi.github.io/">
        <span>Hui Jie Zi Consult Corp.</span>
        </a></li>
      </ul>
    </Container>
  </footer >
)

export default Footer;