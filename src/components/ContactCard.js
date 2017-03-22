import React from 'react';
import { Container } from 'reactstrap';
import logo from '../images/logo_origin.png';


const ContactCard = () => (
  <Container id="contact-card" fluid>
    <table>    
    <thead>
    <tr>
    <th>
    You can contact me directly.
    </th>
    </tr>
    </thead>
      <tbody className="align-middle">
        <tr>
          <td>
            <img id="drygon-logo" src={logo} alt="drygon logo" className="img-fluid mx-auto" />
          </td>
          <td>
            
            <h3>Drygon Consulting Inc. </h3>
            <h4>Project & Engineering Management</h4>
            <p> Tony YEP P.Eng</p>
            <p><span className="fa fa-map-marker"></span> Calgary, Alberta</p>
            <p><span className="fa fa-phone"></span> (587)719-8423</p>
            <p><span className="fa fa-envelope-o"></span> t_yep@shaw.ca </p>
          </td>
        </tr>
      </tbody>
    </table>
  </Container>

);

export default ContactCard;