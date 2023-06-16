import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import "../components/SignUp.css"

const Signup = () => {
  return (
    <div>
      <Row>
        <Col sm={{size:6, offset:3}} >
          <Container >
            <Card outline className="Cardcomp">
              <CardHeader>
                <h3> Fill Information To Register </h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form>
                  {/* Name Field */}
                  <FormGroup>
                    <label for="name">Enter your Name </label>
                    <Input type="text" placeholder="Enter here" id="name" />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <label for="email">Enter your Email </label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <label for="password">Enter your Password </label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                    />
                  </FormGroup>

                  {/* About Field */}
                  <FormGroup>
                    <label for="about">Enter your suggestions </label>
                    <Input
                      type="textarea"
                      id="about"
                      style={{ height: "250px" }}
                    />
                  </FormGroup>

                  <Container>
                    <Button color="dark">SignUp</Button>
                    <Button color="secondary" className="ms-2">
                      Login
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
