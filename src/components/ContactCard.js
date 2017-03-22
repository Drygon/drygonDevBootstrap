import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { logo } from '../images/logo_name.png';


const ContactCard = () => (
  <div>
  <Card>
    <CardImg src={logo} />
  </Card>
  </div>
);

export default ContactCard;