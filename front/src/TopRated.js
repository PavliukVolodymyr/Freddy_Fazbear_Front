import React, {useState, useEffect} from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import SearchShortInput from './componets/UI/SearchShort/SearchShortInput'
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import './styles/ListRestaurant1.css'
import Message from "./componets/Message";
import Add from "./componets/Add";
import AuthStatus from "./componets/AuthStatus";
import axios from "axios";
import ListRestaurant1 from "./componets/ListRestaurant1";



function TopRated(){
    const [restaurantsData, setRestaurantsData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/Restaurants/")
        .then((response) => {
          setRestaurantsData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Помилка запиту до API", error);
          setLoading(false);
        });
    }, []);


    return(
        <div>
            <Background/>
            <Header/>
            <AuthStatus/>
            <div style={{position: "absolute", top: '287px'}}>
               <Navigation/>
            </div>
            
            <UserInterface/>
            <SearchIcon>
                <SearchShortInput/>
            </SearchIcon>
            <div style={{position:'absolute',top:'280px'}}>
            {loading ? (
        <div>Loading...</div>
      ) : (
        <ListRestaurant1 items={restaurantsData} isDish={false} />
      )}
            </div>
            <Message>
                Час щось замовити!
            </Message>
            <Add/>
        </div>
    )
}

export default TopRated;