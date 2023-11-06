import React, { useState, useEffect } from 'react';
import DishesItem from './DishesItem';
import RestaurantItem from './RestaurantItem';
import "../styles/ListRestaurants.css";
import '../styles/UI/SearchLong/SearchLongInput.css';


function ListAll({ searchText }) {
  const [dishesData, setDishesData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Виконуємо запит до API для отримання всіх страв
    fetch('http://127.0.0.1:8000/api/Dishes/')
      .then(response => response.json())
      .then(data => {
        setDishesData(data);
      });

    // Виконуємо запит до API для отримання всіх ресторанів
    fetch('http://127.0.0.1:8000/api/Restaurants/')
      .then(response => response.json())
      .then(data => {
        setRestaurantData(data);
      });
  }, []);

  // Функція для фільтрації елементів на основі тексту пошуку
  const filteredDishes = dishesData.filter(dish =>
    dish.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredRestaurants = restaurantData.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Переконайтеся, що обидва API-запити завершилися перед відображенням даних
  if (dishesData.length === 0 || restaurantData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div className="listRestourants">
        {filteredDishes.map((dish, index) => (
          <div key={index} className="list-item">
            <DishesItem data={dish} />
          </div>
        ))}
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="list-item">
            <RestaurantItem data={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAll;
