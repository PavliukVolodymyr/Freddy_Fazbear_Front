import React, {useState, useEffect} from "react";
import UserInterface from "./componets/UserInterface";
import Background from "./componets/Background";
import Header from "./componets/Header";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import './styles/UI/SearchLong/SearchLongInput.css';
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput";
import Message from "./componets/Message";
import ListRestaurant from "./componets/ListRestaurant";
import Navigation from "./componets/Navigation";
import AuthStatus from "./componets/AuthStatus";
import axios from "axios";

function AllRestaurants() {
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
    {loading ? (
        <div>Loading...</div>
      ) : (
        <ListRestaurant items={restaurantsData} isDish={false} />
      )}
    </div>
    
  );
}

export default AllRestaurants;
