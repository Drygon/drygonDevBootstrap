import React from 'react';
import { Container, Jumbotron, Col, Row } from 'reactstrap';
import logo from '../images/logo_origin.png';
import title from '../images/title.png';

const Header = (props) => (

<div>
  <Jumbotron fluid>
    <Container fluid>
    <Row>
    <Col xs="3">
      <img id="logo-header" src={logo} alt={logo} className="img-responsive" />
      </Col>
      <Col xs="9">
      <img id="title" src={title} alt={title} className="img-responsive" />
      </Col>     
      </Row>
    </Container>
  </Jumbotron>
</div>
);

export default Header;