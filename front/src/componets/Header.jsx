import React from "react";
import '../styles/Header.css'
import { Link } from "react-router-dom";

const Header = () =>{
    
    return(
       <Link to={'/'} className="header">
            <p className="delivery1">Delivery</p>
            <p className="kolomyia1">Kolomyia</p>
       </Link> 
    )
}
export default Header;