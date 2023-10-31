import React from "react";
import '../styles/AuthIcon.css'
import { Link } from "react-router-dom";

const AuthIcon = () => {
    return(
        <div className="login-registration">
             <Link to={'/Auth'} className="login-registration-text" >Login/Registration</Link>
        </div>
    )
}

export default AuthIcon;