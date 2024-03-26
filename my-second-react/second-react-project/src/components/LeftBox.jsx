/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";



function LeftBox() {
  return (
    <div className="leftContainer">
      <div className="container">
      <div className="numbers">
        <h3><Link to="/">1</Link></h3>
        <h3><Link to="/SelectPlan">2</Link></h3>
        <h3><Link to="/AddOns">3</Link></h3>
        <h3><Link to="/Summary">4</Link></h3>
        </div>
      <div className="menu">
        <h2>
          <span>STEP 1</span> YOUR INFO
        </h2>

        <h2>
          <span>STEP 2</span> SELECT PLAN
        </h2>

        <h2>
          <span>STEP 3</span> ADD-ONS
        </h2>

        <h2>
          <span>STEP 4</span> SUMMARY
        </h2>
      </div>
      </div>
      
    </div>
  );
}

export default LeftBox;
