import React, {useState} from "react";
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

const Cart = () => {
    const [selectedDishes, setSelectedDishes] = useState([]);

    // Функція для додавання страви до кошика
    const addDishToCart = (dish) => {
        setSelectedDishes([...selectedDishes, dish]);
    };

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
                
                {/* {selectedDishes.map((dish, index) => (
                    <OrdersItem key={index} dish={dish} />
                ))} */}
            </ListOrders>
            <button className="createOrder">Create Order</button>
        </div>
    );
}

export default Cart;