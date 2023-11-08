import React, {useState, useEffect} from "react";
import Background from "./componets/Background";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import AuthStatus from "./componets/AuthStatus";
import Header from "./componets/Header";
import Message from "./componets/Message";
import ListOrders from "./componets/ListOrders";
import OrdersItem from "./componets/OrdersItems";
import './styles/Cart.css'
import Axios from "axios";

const Cart = () => {
    const [selectedDishes, setSelectedDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = parseInt(localStorage.getItem('userId'), 10);
    console.log(userId);

    useEffect(() => {
        // Отримання даних страв користувача з сервера
        Axios
          .get(`http://127.0.0.1:8000/api/Customers/${userId}/`) // Припустимо, це URL для отримання страв користувача
          .then((response) => {
            setSelectedDishes(response.data.cart);
            console.log(response.data.cart);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Помилка запиту до API", error);
            setLoading(false);
          });
    }, [userId]);



    return(
        <div>
            <Background/>
            <Header/>
            <Navigation/>
            <UserInterface/>
            <SearchIcon>
            </SearchIcon>
            <AuthStatus/>
            <Message>
            Have you already chosen something?
            </Message>
            <ListOrders>

                {selectedDishes.map((dish, index) => (
                    <OrdersItem key={index} dish={dish} />
                ))}
            </ListOrders>
            <button className="createOrder">Create Order</button>
        </div>
    );
}

export default Cart;