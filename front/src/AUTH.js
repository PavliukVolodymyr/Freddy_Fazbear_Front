import React from "react";
import Background from "./componets/Background";
import Header from "./componets/Header";
import './styles/Auth.css'

function AUTH (){

    return(
        <div>
            <Background/>
            <Header/>
            <div class="authorization">
          <div class="rectangle-18"></div>



             
                <div class="rectangle-19">
                    <input class="enter-your-login-or-email-address" placeholder="Enter your login or email address" type="text"></input>
                </div>

           
               <div class="rectangle-192"> 
                <input class="enter-your-password" placeholder="Enter your password" type="password"></input>
              </div>

            

               <div class="rectangle-20">
                <button class="continue" onclick="">Continue</button>
               </div> 
              

            {/* <a class="forgot-your-password" href="">Forgot your password?</a> */}

          <div class="frame-23">
            <div class="group-62">
              
              
            </div>
            <div class="rectangle-22"></div>
            <div class="rectangle-23"></div>
            <div class="new-to-this-site">New to this site?</div>
          </div> 
          <div class="rectangle-202">
            <div class="create-a-new-account">Create a new account</div>
          </div>
        </div>
        </div>
    )
}

export default AUTH;