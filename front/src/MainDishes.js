import React from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import Header from "./componets/Header";
import ProfileIcon from "./componets/ProfileIcon";
import ListRestaurant from "./componets/ListRetaurant";
import DishesItem from "./componets/DishesItem";
import Message from "./componets/Message";

function MainDishes(){
    return(
        <div>
            <Background/>
            <Header/>
            <ProfileIcon/>
            <SearchIcon>
                <SearchLongInput/>
            </SearchIcon>
            <Navigation/>
            <UserInterface/>
            <Message>
                Ммммм виглядає смачно?
            </Message>
            <ListRestaurant>
                <DishesItem/>    
                <DishesItem/> 
                <DishesItem/> 
                <DishesItem/> 
                <DishesItem/> 
                <DishesItem/> 
                <DishesItem/> 
                <DishesItem/> 
            </ListRestaurant>    
            
        </div>
    )
}

export default MainDishes;