import React, { useState, useEffect } from "react";
import Background from "./componets/Background";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import SearchShortInput from "./componets/UI/SearchShort/SearchShortInput";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import './styles/ListRestaurant1.css'
import Message from "./componets/Message";
import Add from "./componets/Add";
import AuthStatus from "./componets/AuthStatus";
import axios from "axios";
import ListRestaurant1 from "./componets/ListRestaurant1";
import './styles/UI/SearchShort/SearchShortInput.css'

function TopRated() {
    const [restaurantsData, setRestaurantsData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState(''); // Стан для збереження тексту пошуку

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

    // Оновлюємо фільтрований список ресторанів при зміні тексту пошуку
    useEffect(() => {
        const filtered = restaurantsData.filter(restaurant =>
            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchText, restaurantsData]);

    return (
        <div>
            <Background />
            <Header />
            <AuthStatus />
            <div style={{ position: "absolute", top: '287px' }}>
                <Navigation />
            </div>
            <UserInterface />
            <SearchIcon>
                <SearchShortInput className="what-would-you-like-to-eat1" onSearch={setSearchText} />
            </SearchIcon>
            <div style={{ position: 'absolute', top: '280px' }}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ListRestaurant1 items={filteredRestaurants} isDish={false} />
                )}
            </div>
            <Message>
            It's time to order something!
            </Message>
            <Add />
        </div>
    );
}

export default TopRated;
