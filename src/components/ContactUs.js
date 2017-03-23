import React from 'react';
import { Container } from 'reactstrap';
import MapContainer from './MapContainer';

const ContactUs = () => (
    <Container id="contact" fluid >
        <h3 className="text-center">CONTACT US</h3>
    <section id="map">
    <MapContainer />
    </section>
    </Container >
);

export default ContactUs;