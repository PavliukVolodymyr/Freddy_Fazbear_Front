import React from "react";
import UserInterface from "./componets/UserInterface";
import Background from "./componets/Background";
import Header from "./componets/Header";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import './styles/UI/SearchLong/SearchLongInput.css';
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput";
import Message from "./componets/Message";
import ListRestaurant from "./componets/ListRetaurant";
import RestaurtantItem from "./componets/RestaurantItem";
import Navigation from "./componets/Navigation";
import AuthStatus from "./componets/AuthStatus";


function AllRestaurants() {
  return (
    <div>
    <Header/>
    <Background/>
    <UserInterface/>
    <SearchIcon>
    <SearchLongInput/>
    </SearchIcon>
    <AuthStatus/>
    <Navigation/>
    <Message>
      Де Смачніше?
    </Message>
    <ListRestaurant>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
      <RestaurtantItem/>
    </ListRestaurant>
    </div>
    
  );
}

export default AllRestaurants;
