import React from 'react';
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label } from "reactstrap";
import { Form, useSubmit, useNavigate } from "react-router-dom";
import '../components/RegistrationForm.css';

const RegistrationForm = () => {
  const submit = useSubmit();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      submit(formData, { method: 'post', action: '/submit-registration' })
        .then(response => {
          if (response.ok) {
            navigate('/success'); // Navigate to a success page or another route
          } else {
            // Handle errors if needed
          }
        });
    } catch (error) {
      console.error('Submission error:', error);
      // Handle submission error
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <h4>Please fill up the below Form for Registration</h4>
        </CardHeader>
        <CardBody>
          <Form method="post" action="/submit-registration" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Enter Name :</Label>
              <Input type="text" id="name" name="name" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Enter Email :</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Enter Password :</Label>
              <Input type="password" id="password" name="password" placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
              <Label for="about">Enter about yourself :</Label>
              <Input type="textarea" id="about" name="about" placeholder="Enter about yourself" />
            </FormGroup>
            <FormGroup>
              <button type="submit">Submit</button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
