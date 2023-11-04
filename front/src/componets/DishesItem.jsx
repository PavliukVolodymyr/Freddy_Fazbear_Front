// DishesItem.js
import React from "react";
import '../styles/DisheItem.css'

const DishesItem = ({ data }) => {
  return (
    <div className="dish-item">
      <img className="MainDishesImg" src={data.photo} alt="none" />
      <div className="Price">${data.cost}</div>
      <div className="NameDish">{data.name}</div>
      <div className="restaurantName">{data.restaurant_name}</div>
      <div className="group-29">
        <div className="rectangle-24"></div>
        <div className="add">Add</div>
      </div>
    </div>
  );
};

export default DishesItem;
