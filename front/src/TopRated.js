import React from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import SearchShortInput from './componets/UI/SearchShort/SearchShortInput'
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";

function TopRated(){
    return(
        <div>
            <Background/>
            <Header/>
            <Navigation/>
            <UserInterface/>
            <SearchIcon>
                <SearchShortInput/>
            </SearchIcon>
        </div>
    )
}

export default TopRated;