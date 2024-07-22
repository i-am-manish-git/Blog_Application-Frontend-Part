import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import '../CSS/Signup.css';
import { signUp } from "../services/user-service";

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    about: ''
  });

  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  // Validate form data
  const validate = () => {
    const errors = {};
    let isValid = true;

    if (!data.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setError({ errors, isError: !isValid });
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Validate form before submission
    if (!validate()) {
      return; // If validation fails, do nothing
    }

    // Show confirmation popup
    const userConfirmed = window.confirm("Are you sure you want to submit the form?");
    if (!userConfirmed) {
      return; // If user cancels, do nothing
    }

    // Call server API for sending data
    try {
      const response = await signUp(data);
      console.log(response.data);
      window.alert("Successfully Registered");

      // Redirect to login page
      window.location.href = '/login'; // Adjust the URL to your login page
    } catch (error) {
      console.error('Submission failed:', error.response ? error.response.data : error.message);
      window.alert("Registration failed! " + (error.response ? error.response.data.message : error.message));
    }
  };

  // Handle change
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  return (
    <Base>
      <Container>
        <Card>
          <CardHeader>
            <h4>Please fill up the below Form for Registration</h4>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>

              <FormGroup>
                <Label for="name">Enter Name :</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => handleChange(e, 'name')}
                  value={data.name}
                  invalid={!!error.errors.name}
                />
                <FormFeedback>{error.errors.name}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="email">Enter Email :</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => handleChange(e, 'email')}
                  value={data.email}
                  invalid={!!error.errors.email}
                />
                <FormFeedback>{error.errors.email}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="password">Enter Password :</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => handleChange(e, 'password')}
                  value={data.password}
                  invalid={!!error.errors.password}
                />
                <FormFeedback>{error.errors.password}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="about">Enter about yourself :</Label>
                <Input
                  type="textarea"
                  id="about"
                  name="about"
                  placeholder="Enter about yourself"
                  onChange={(e) => handleChange(e, 'about')}
                  value={data.about}
                />
              </FormGroup>

              <FormGroup>
                <button type="submit">Submit</button>
              </FormGroup>

            </form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
};

export default Signup;
