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

        <form className="form-div">
          <label htmlFor="name">Are you a Farmer or Customer?</label>
          <br />
          <input type="text" placeholder="Enter here" />
        </form>

        <div className="btn-div">
          <Button color="dark">Lets Get Started!</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
