import React from "react";
import "../components/styles/Login.css";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const navigateSignup = () =>{
    navigate('/signup');
  }

  return (
    <>
      <Container className="container">
        <Card className="card">
          <CardHeader className="card-header">
            <h5>Login Please!</h5>
          </CardHeader>

          <CardBody className="card-body">
            <Form>
              {/* Email Field */}
              <FormGroup>
                <label htmlFor="email">Enter your email</label>
                <Input type="email" placeholder="Enter here" id="email" />
              </FormGroup>
              <br />

              {/* Password Field */}
              <FormGroup>
                <label htmlFor="password">Enter your password</label>
                <Input type="password" placeholder="Enter here" id="password" />
              </FormGroup>

              {/* Button */}
              <div className="btn-div">
                <Button className="btn" color="dark">
                  Login
                </Button>

                  <h5>
                    Didn't Register?
                  </h5>

                <Button className="btn" color="dark"
                onClick={navigateSignup}
                >
                  SignUp
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Login;
