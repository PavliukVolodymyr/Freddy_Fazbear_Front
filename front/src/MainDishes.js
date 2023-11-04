// MainDishes.js
import React, { useState, useEffect } from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import Header from "./componets/Header";
import Message from "./componets/Message";
import AuthStatus from "./componets/AuthStatus";
import ListRestaurant from "./componets/ListRestaurant";

import axios from "axios";

function MainDishes() {
  const [dishesData, setDishesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Dishes/")
      .then((response) => {
        setDishesData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Background />
      <Header />
      <AuthStatus />
      <SearchIcon>
        <SearchLongInput />
      </SearchIcon>
      <Navigation />
      <UserInterface />
      <Message>Ммммм виглядає смачно?</Message>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ListRestaurant items={dishesData} isDish={true} />
      )}
    </div>
  );
}

export default MainDishes;
