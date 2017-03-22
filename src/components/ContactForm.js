import React from 'react';
import { Button, Container, Col, Form, FormGroup,FormText, Label, Input } from 'reactstrap';

const ContactForm = () => (
    <Container fluid>           
        <Form>
         <FormText className="text-center">
            Or fill out the form below and press Submit.
            </FormText>
            <FormGroup row>
                <Label for="Enter your name" sm={2}>Name:</Label>
                <Col sm={10}>
                    <Input type="name" name="name" id="name" placeholder="name" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Enter your email" sm={2}>Email:</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </Col>
            </FormGroup>
            <FormGroup row>
          <Label for="message" sm={2}>Message:</Label>
          <Col sm={10}>
            <Input type="textarea" name="message" id="message" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
        </Form>
    </Container >
);

export default ContactForm;