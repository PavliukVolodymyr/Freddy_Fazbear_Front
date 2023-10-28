import React from "react";
import '../styles/ListRestaurants.css';

const ListRestaurant = ({children}) =>{
    return(
        <div class="listRestourants">
            {children}
        </div>
    )
}

export default ListRestaurant;