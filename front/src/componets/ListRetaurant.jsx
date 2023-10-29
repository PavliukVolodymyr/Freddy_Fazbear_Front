import React from "react";
import '../styles/ListRestaurants.css';

const ListRestaurant = ({children}) =>{

    return(
        <div className="listRestourants">
            {children}
        </div>
    )
}

export default ListRestaurant;