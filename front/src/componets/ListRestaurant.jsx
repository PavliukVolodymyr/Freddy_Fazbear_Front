// ListRestaurant.js
import React from "react";
import DishesItem from "./DishesItem";
import RestaurantItem from "./RestaurantItem";
import "../styles/ListRestaurants.css";

const ListRestaurant = ({ items, isDish }) => {
  const chunkedItems = chunkArray(items,1);

  return (
    <div className="listRestourants">
      {chunkedItems.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item, index) => (
            <div key={index} className="list-item">
              {isDish ? <DishesItem data={item} /> : <RestaurantItem data={item} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Функція для розділення масиву на групи
function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default ListRestaurant;
