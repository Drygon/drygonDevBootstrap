import React from 'react';
import { Container, Row } from 'reactstrap';
import DrygonCard from './DrygonCard';
import logo from '../images/logo_name.png';

const About = () => (  
   <div>
    <Container>
      <h1 className="text-center">DRYGON CONSULTING INC.</h1>
      <p>Is a company providing project and engineering management services.  The website <a href="http://drygon.com">Drygon</a> is the home of the <em>Discipline Interface Charts</em> which were developed and designed by <strong>Tony Yep</strong>.  These drawings provide the detailed sequence of work which should be maintained to ensure the successful execution of projects.  This website permits users to access these drawings for their personal use, plus related documentation to help improve their engineering and project management skills.</p>
      <p>The president of <em>Drygon Consulting Inc.</em> is <strong>Tony Yep</strong> who had been a professional engineer working at Bantrel Inc. in Calgary for over 20 years.  He held positions of Mechanical Department Chief, Project Engineer, Manager of Engineering and Senior Project Manager working on multiple projects related to the oilsands, petrochemical and refinery industry.</p>
      <h2>What Is DRYGON ??</h2>
      <p>This limerick was written by Tim Yep when he was 7 years old.  He created the Drygon creature.</p>
      <Row id="drygon-card" className="justify-content-center">     
        <DrygonCard id="drygon-card" />
       
      </Row>
      <p>Now DRYGON has matured into the current logo depicting a stylized design incorporating both a powerful dragon with the mythical phoenix. <img id="drygon" alt={logo} src={logo} /></p>
    </Container>
</div>
);

export default About;