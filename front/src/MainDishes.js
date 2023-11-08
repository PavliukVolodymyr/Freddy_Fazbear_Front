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
import './styles/MainDishes.css';
import axios from "axios";

function MainDishes() {
  const [dishesData, setDishesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(''); // Стан для збереження тексту пошуку
  const userId = parseInt(localStorage.getItem('userId'), 10);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/Customers/${userId}/`)
      .then((response) => {
        const userCart = response.data.cart;
        setCartItems(userCart);
        setTotalQuantity(userCart.length);
        console.log("Кількість елементів у кошику:", totalQuantity);
      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Dishes/")
      .then((response) => {
        console.log(response.data);
        setDishesData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);
        setLoading(false);
      });
  }, []);



  // Функція для оновлення тексту пошуку
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <Background />
      <Header />
      <AuthStatus />
      <SearchIcon>
        <SearchLongInput className="what-would-you-like-to-eat" onSearch={handleSearch} />
      </SearchIcon>
      <Navigation />
      <UserInterface />
      <Message>Mmmmm looks delicious!</Message>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ListRestaurant items={dishesData} isDish={true} searchText={searchText} />
      )}
      <div class="ellipse-99"><div>{totalQuantity}</div></div>
      <div class="go-to-cart-button-anauth">
  <div class="group-30123">
    <div class="rectangle-23123"></div>
    <div class="go-to-cart123">Go to cart</div>
  </div>
  <svg
    class="user-interface-shopping-cart123"
    width="48"
    height="46"
    viewBox="0 0 48 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_644_85)">
      <g filter="url(#filter0_d_644_85)">
        <path
          d="M8 5.75C6.89543 5.75 6 6.60812 6 7.66667C6 8.72521 6.89543 9.58333 8 9.58333H8.72078C9.67414 9.58333 10.495 10.2282 10.6819 11.1241L13.7173 25.6684C14.0912 27.4602 15.7329 28.75 17.6396 28.75H35.4111C37.2718 28.75 38.8867 27.5205 39.3075 25.7835L41.9136 15.0251C42.3502 13.2226 40.9221 11.5 38.9913 11.5H14.8396L14.6043 10.3723C14.0434 7.68465 11.5809 5.75 8.72078 5.75H8Z"
          fill="#FF5C28"
        />
      </g>
      <g filter="url(#filter1_d_644_85)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 36.4166C22 38.5337 20.2091 40.2499 18 40.2499C15.7909 40.2499 14 38.5337 14 36.4166C14 34.2995 15.7909 32.5833 18 32.5833C20.2091 32.5833 22 34.2995 22 36.4166ZM38 36.4166C38 38.5337 36.2091 40.2499 34 40.2499C31.7909 40.2499 30 38.5337 30 36.4166C30 34.2995 31.7909 32.5833 34 32.5833C36.2091 32.5833 38 34.2995 38 36.4166Z"
          fill="#FF5C28"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_644_85"
        x="2"
        y="5.75"
        width="43.9926"
        height="31"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_644_85"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_644_85"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_644_85"
        x="10"
        y="32.5833"
        width="32"
        height="15.6667"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_644_85"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_644_85"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_644_85">
        <rect width="48" height="46" fill="white" />
      </clipPath>
    </defs>
  </svg>
</div>
    </div>
  );
}

export default MainDishes;