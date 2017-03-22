import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import logo from '../images/logo_origin.png';
import title from '../images/title.png';

const Header = (props) => (
  <Jumbotron fluid>
    <Container fluid>       
       <div>
          <img id="logo-header" src={logo} alt="Logo Header" className="img-fluid p-2" />       
          <img id="title" src={title} alt="title" className="img-fluid p-2" />  
      </div>    
    </Container>
  </Jumbotron>
);

export default Header;