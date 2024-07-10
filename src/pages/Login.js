import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import Base from "../components/Base";
import '../CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous error message

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        window.location.href = '/dashboard'; // Redirect to dashboard or any other page upon successful login
      } else {
        const responseBody = await response.text();
        setError(`Login failed: ${responseBody}`);
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <Base>
      <Container>
        <Card className="login-card">
          <CardHeader>
            <h4>Login Here!!</h4>
          </CardHeader>
          <CardBody>
            {error && <Alert color="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary">Login</Button>
            </form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
};

export default Login;
