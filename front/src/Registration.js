import React from "react";
import Background from "./componets/Background";
import './styles/Registration.css';

const Registration = () =>{
    return(
        
        <div>
            <Background/>
             <div class="authorization">
                <div class="rectangleFirst">
                    <input class="Re-EnterYourPassword"
                     placeholder="Enter your first name"
                     type="text"
                     
                     ></input>
                </div>
                <div class="rectangleLast">
                    <input class="Re-EnterYourPassword"
                     placeholder="Enter your last name"
                     type="text"
                     
                     ></input>
                </div>
                <div class="rectangleEmail">
                    <input class="Re-EnterYourPassword"
                     placeholder="Enter your email address"
                     type="text"
                     
                     ></input>
                </div>
                <div class="rectanglePassword">
                    <input class="Re-EnterYourPassword"
                     placeholder="Enter your password"
                     type="password"
                     
                     ></input>
                </div>
                <div class="rectanglePassword2">
                    <input class="Re-EnterYourPassword"
                     placeholder="Re-Enter your password"
                     type="password"
                     
                     ></input>
                </div>

               <div className="rectangle-202020">
                <button className="continue1">Continue</button>
               </div> 

          </div>
          
        </div>
    )
}

export default Registration;