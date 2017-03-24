import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import logo from '../images/logo_origin_75.png';
import title from '../images/title_75.png';

const Banner = (props) => (
  <Jumbotron id="banner-wrapper" fluid>
    <Container id="banner" fluid>       
       <div>
          <img id="logo-header" src={logo} alt="Logo Header" className="img-fluid p-2" />       
          <img id="title" src={title} alt="title" className="img-fluid p-2" />  
      </div>    
    </Container>
  </Jumbotron>
);

export default Banner;