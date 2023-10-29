import React from "react";
import myImage from '../img/rectangle-12.png'
import '../styles/DisheItem.css'

const DishesItem = () =>{
    return(
        <div>
            <img class="MainDishesImg" alt="none" src={myImage} />
            <div class="Price">$39</div>
            <div class="NameDish">Panera Soup</div>
            <div class="restaurantName">Restaurant name</div>
            
            <div class="group-29">
                <div class="rectangle-24"></div>
                <div class="add">Add</div>
            </div>
        </div>
    )
}

export default DishesItem;