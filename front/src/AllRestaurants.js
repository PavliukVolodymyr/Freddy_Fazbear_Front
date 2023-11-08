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
  const [searchText, setSearchText] = useState('');

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

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
    <Header/>
    <Background/>
    <UserInterface/>
    <SearchIcon>
    <SearchLongInput className="what-would-you-like-to-eat" onSearch={handleSearch} />
    </SearchIcon>
    <AuthStatus/>
    <Navigation/>
    <Message>
    Where is it tastier?
    </Message>
    {loading ? (
        <div>Loading...</div>
      ) : (
        <ListRestaurant items={restaurantsData} isDish={false} searchText={searchText} />
      )}
    </div>
    
  );
}

export default AllRestaurants;
