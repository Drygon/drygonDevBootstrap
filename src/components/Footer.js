import React from 'react';
import { Container } from 'reactstrap';
const Footer = () => (
  <footer id="footer" className="container">
    <Container fluid> 
    <div>     
        <h2 className="major"><span>Get in touch</span></h2>
        <ul className="contact">
          <li><a target="_blank" href="https://www.linkedin.com/in/tony-yep-721b2337/" className="icon fa-linkedin fa-lg fa-border">
            <span className="label">linkedin</span>
          </a></li>
          <li><a target="_blank" href="http://www.youtube.com/channel/UCS-pKWWh_L7wYn8U6nz-zhA" className="icon fa-youtube fa-lg fa-border">
            <span className="label">youtube</span>
          </a></li>
        </ul>   
    </div>  
      <div id="copyright">
      <ul className="menu"> 
        <li>&copy; Drygon Consulting Inc. All rights reserved</li>
        <li>Design & Program By: <a href="https://hjzi.github.io/">
          <span>Hui Jie Zi Consult Corp.</span>
        </a></li>
        </ul>
      </div>  
    </Container>
  </footer >
)

export default Footer;