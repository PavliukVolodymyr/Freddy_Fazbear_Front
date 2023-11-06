import React, { useState, useEffect } from 'react';
import DishesItem from './DishesItem';
import RestaurantItem from './RestaurantItem';
import '../styles/ListRestaurants.css';


const ListRestaurant = ({ items, isDish, searchText }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // Фільтрація елементів на основі введеного тексту пошуку
    const filteredResults = items.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filteredResults);
  }, [searchText, items]);

  // Функція для розділення масиву на групи
  function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const chunkedItems = chunkArray(filteredItems, 1);

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

export default ListRestaurant;
