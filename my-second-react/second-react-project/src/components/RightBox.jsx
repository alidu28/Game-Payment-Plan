/* eslint-disable no-unused-vars */
import React from 'react'
// import { useHistory } from 'react-router-dom';



function RightBox() {

    // const history = useHistory();

    // const handleNext = () => {
    //   history.push("/SelectPlan");
    // };
  


  return (
    <div>
        <div className="rightContain">
            <div className="contain">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>

                <div className="formContain">
                    <div className="name">
                        <label>Name</label>
                        <input type="text" name="name" id="name" placeholder='e.g. Stephen King'/>
                    </div>

                    <div className="email">
                        <label>Email Address</label>
                        <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com'/>
                    </div>

                    <div className="phone">
                        <label>Phone Address</label>
                        <input type="text" name="phone" id="phone" placeholder='e.g. +1 234 567 890'/>
                    </div>
                </div>
                <input type="button" value="Next Step" id='next' />
            </div>
        </div>
    </div>
  )
}

export default RightBox;