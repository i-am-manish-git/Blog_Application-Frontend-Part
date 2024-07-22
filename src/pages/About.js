import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../CSS/About.css';
import Base from "../components/Base";

const About=()=> {
    return(
        <Base>
         <div className="about-page">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" className="text-center mb-5">
            <h1>About Us</h1>
            <p className="lead">
              Welcome to MyBlog, your number one source for insightful articles, thought-provoking discussions, and a community of passionate writers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h5">Our Mission</CardTitle>
                <CardText>
                  Our mission is to provide reliable, diverse, and engaging content that sparks conversations and encourages knowledge sharing.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h5">Our Journey</CardTitle>
                <CardText>
                  Founded in 2024, MyBlog has come a long way from its beginnings. What started as a passion project has grown into a platform serving readers worldwide.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2>Community Highlights</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="4" className="text-center mt-3">
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h5">Total Posts</CardTitle>
                <CardText>
                  Over 5,000 posts shared by our vibrant community.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="text-center mt-3">
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h5">Featured Category</CardTitle>
                <CardText>
                  Explore our most popular category: Artificial Intelligence.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="text-center mt-3">
            <Card className="about-card">
              <CardBody>
                <CardTitle tag="h5">Top Contributor</CardTitle>
                <CardText>
                  Madhu Kc has shared the most insightful posts this month.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
        </Base>
    );
}
export default About;