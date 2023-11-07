import React from "react";
import '../styles/ListOrders.css'

const ListOrders = ({children}) =>{
    return(
        <div className="ListOrders">
            {children}
        </div>
    );
}

export default ListOrders;