import React from "react";
import "../components/styles/Home.css";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="first-div">
        <div className="heading-div">
          <h2>Welcome To Fresh Farms!</h2>
          <h4>Let's Get You Started</h4>
        </div>

        <div className="btn-div">
          <h5>Are you a Farmer or Customer?</h5>
          <br />
          <Button className="btns" color="dark">Farmer</Button>
          <Button className="btns" color="dark">Customer</Button>
        </div>
        
      </div>
    </>
  );
};

export default Home;
