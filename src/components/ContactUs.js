import React from 'react';
import { Container, Row } from 'reactstrap';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

const ContactUs = () => (
    <Container id="contact" fluid >
        <h3 className="text-center">CONTACT US</h3>
       <Row>
       <ContactCard md="6" />
       <ContactForm md="6"/>        
       </Row>
    </Container >
);

export default ContactUs;