import React, {useState } from 'react';
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label } from "reactstrap";
import Base from "../components/Base";
import '../CSS/Signup.css';

import {signUp} from "../services/user-service";

const Signup = () => {
  //submit the form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log(data);

    //call server api for sending data
    signUp(data).then((resp)=>{
      console.log(resp)
      console.log("success log")
    }).catch((error)=>{
      console.log(error)
      console.log("Error log")
    });

    // Show confirmation popup
    const userConfirmed = window.confirm("Are you sure you want to submit the form?");
    if (!userConfirmed) {
      return; // If user cancels, do nothing
    }

    const formData = new FormData(event.target); // Creates a FormData object from the form fields

    try {
      const response = await fetch('/submit-registration', {
        method: 'POST',
        body: formData // Includes form data in the request body
      });

      if (response.ok) {
        // Show success popup
        window.alert("Successfully Registered");

        // Redirect to login page
        window.location.href = '/login'; // Adjust the URL to your login page
      } else {
        // Handle errors
        console.error('Submission failed:', response.statusText);
        // Optionally, show an error message to the user
        window.alert("Registration failed: " + response.statusText);
      }
    } catch (error) {
      console.error('Error during submission:', error);
      // Handle network errors or other submission errors
      window.alert("An error occurred during registration. Please try again.");
    }
  };



  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    about:''
  })

  const [error, setError]=useState({
    errors:{},
    isError:false
  })

  //handle change
  const handleChange=(event,property)=>{
    //dynamin setting the value
    setData({...data,[property]:event.target.value})
  }

  return (
    <Base>
      <Container>
        {/* {JSON.stringify(data)} */}
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
                 onChange={(e)=>handleChange(e,'name')} 
                 value={data.name}
                 />
              </FormGroup>

              <FormGroup>
                <Label for="email">Enter Email :</Label>
                <Input 
                type="email" 
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e)=>handleChange(e,'email')} 
                value={data.email}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Enter Password :</Label>
                <Input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" 
                onChange={(e)=>handleChange(e,'password')} 
                value={data.password}
                />
              </FormGroup>

              <FormGroup>
                <Label for="about">Enter about yourself :</Label>
                <Input 
                type="textarea" 
                id="about" 
                name="about" 
                placeholder="Enter about yourself" 
                onChange={(e)=>handleChange(e,'about')} 
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
