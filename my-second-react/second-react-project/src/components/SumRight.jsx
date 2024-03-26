/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function SumRight() {

    // const history = useHistory();

    // const handleNext = () => {
    //   history.push();
    // };
  
    // const handleBack = () => {
    //   history.goBack("/AddOns");
    // };

  return (
    <div className='rightContain'>
    <div className="contain">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div className="calcContain">
                <div className="catType">
                    <h4>
                        Arcade (Monthly)
                    <Link to="/SelectPlan"><p>Change</p></Link>
                    </h4>

                    <p>$9/mo</p>
                </div>

                <hr />

                    <h4>
                        Online service
                        <p>+$1/mo</p>
                    </h4>

                    <h4>
                        Larger storage
                        <p>+$2/mo</p>
                    </h4>

            </div>

            <div className="total">
                <h4>
                Total (per month)
                <p>+$12/mo</p>
                </h4>
            </div>
            
            <input type="button" value="Go Back" id='back' />
            <input type="button" value="Comfirm" id='next' />
        </div>
</div>
  )
}

export default SumRight;