import React from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import SearchShortInput from './componets/UI/SearchShort/SearchShortInput'
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import ProfileIcon from "./componets/ProfileIcon";
import ListRestaurant1 from "./componets/ListRestaurant1";
import RestaurtantItem from "./componets/RestaurantItem";
import './styles/ListRestaurant1.css'
import Message from "./componets/Message";
import Add from "./componets/Add";



function TopRated(){
    return(
        <div>
            <Background/>
            <Header/>
            <div style={{position: "absolute", top: '287px'}}>
               <Navigation/>
            </div>
            
            <UserInterface/>
            <SearchIcon>
                <SearchShortInput/>
            </SearchIcon>
            <ProfileIcon/>
            <div style={{position:'absolute',top:'280px'}}>
                <ListRestaurant1>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                    <RestaurtantItem/>
                </ListRestaurant1>
            </div>
            <Message>
                Час щось замовити!
            </Message>
            <Add/>
        </div>
    )
}

export default TopRated;