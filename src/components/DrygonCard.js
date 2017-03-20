import React from 'react';
import { Card, CardImg } from 'reactstrap';
import drygon from '../images/drygon_card.svg';

const DrygonCard = () => (
  <div>
  <Card>
    <CardImg src={drygon} />
  </Card>
  </div>
);

export default DrygonCard;