/* eslint-disable no-unused-vars */
import React from 'react'
// import { useHistory } from 'react-router-dom';

function AddOnsRight() {
    // const history = useHistory();

    // const handleNext = () => {
    //   history.push('/Summary');
    // };
  
    // const handleBack = () => {
    //   history.goBack("/SelectPlan");
    // };
  return (
    <div className='rightContain'>
        <div className="contain">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <div className="pickContain">
                    <div className="service">
                        <input type="checkbox" name="check" id="check" />

                        <h3>
                            Online service
                            <p>Access to multiplayer games</p>
                        </h3>

                        <p id='mo1'>+$1/mo</p>
                    </div>

                    <div className="storage">
                        <input type="checkbox" name="check" id="check" />

                        <h3>
                            Larger storage
                            <p>Extra 1TB of cloud save</p>
                        </h3>

                        <p id='mo2'>+$2/mo</p>
                    </div>

                    <div className="profile">
                        <input type="checkbox" name="check" id="check" />

                        <h3>
                            Customizable profile
                            <p>Custom theme on your profile</p>
                        </h3>

                        <p id='mo3'>+$2/mo</p>
                    </div>
                </div>

                {/* <h1> {currentPage}</h1> */}
                <input type="button" value="Go Back" id='back' />
                <input type="button" value="Next Step" id='next' />
            </div>
    </div>
  )
}

export default AddOnsRight;