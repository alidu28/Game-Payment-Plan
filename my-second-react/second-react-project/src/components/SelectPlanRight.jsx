/* eslint-disable no-unused-vars */
import React from 'react'
import arcade from '../img/icon-arcade.svg';
import advance from '../img/icon-advanced.svg';
import pro from '../img/icon-pro.svg';
// import { useHistory } from 'react-router-dom';


function SelectPlanRight() {

    // const history = useHistory();

    // const handleNext = () => {
    //   history.push("/AddOns");
    // };
  
    // const handleBack = () => {
    //   history.goBack("/");
    // };

  return (
    <div className='rightContain'>
        <div className="contain">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>

                <div className="planContain">
                    <div className="arcade">
                        <img src={arcade} alt="" />

                        <h3>
                            Arcade
                            <p>$9/mo</p>
                        </h3>
                    </div>

                    <div className="advance">
                        <img src={advance} alt="" />

                        <h3>
                            Advanced
                            <p>$12/mo</p>
                        </h3>
                    </div>

                    <div className="pro">
                        <img src={pro} alt="" />

                        <h3>
                            Pro
                            <p>$15/mo</p>
                        </h3>
                    </div>
                </div>
                <div className="category">
                    <p>Monthly</p>
                    <label className="switch">
                        <input type="checkbox" id='toggle'/>
                        <span className="slider"></span>
                    </label>
                    <p>Yearly</p>
                </div>
                <input type="button" value="Go Back" id='back' />
                <input type="button" value="Next Step" id='next' />
            </div>
    </div>
  )
}

export default SelectPlanRight;