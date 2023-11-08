import React, { useState } from "react";
import Background from "./componets/Background";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import SearchIcon from "./componets/UI/SearchShort/SearchIcon";
import AuthStatus from "./componets/AuthStatus";
import Header from "./componets/Header";
import Message from "./componets/Message";
import './styles/CartOrder.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const CartOrder = () => {
    const [phone, setPhone] = useState()
    return (
        <div>
            <Background />
            <Header />
            <Navigation />
            <UserInterface />
            <SearchIcon>
            </SearchIcon>
            <AuthStatus />
            <Message>
                Не можу дочекатись!
            </Message>
            <div className="OrderBackground">
                <div className="new-order">New order</div>
                <div className="rectangle"></div>
                
                <div className="group1">
                    <div className="PhoneNumber">
                        Phone number
                    </div>
                    <PhoneInput
                        className="PhoneNumberInput"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone} />
                </div>
                <div className="group2">
                    <div className="OrderName">
                        Name
                    </div>
                    <input className="InputOrderName" type="text"></input>
                </div>
                <div className="group3">
                    <div className="DeliveryOrder">
                        Delivery address
                    </div>
                    <input className="DeliveryInput" type="text"></input>
                </div>
                <div className="group4">
                    <div className="PlaceOrder">
                        Place
                    </div>
                    <div className="PlaceList">

                    </div>
                </div>
                <button className="ConfirmOrderBut">Confirm</button>
                <div className="ListCreateOrder">
                <div className="DishCreateOrder">
                    <img className="DishImgOrder" ></img>
                    <div className="DishNameOrder">Burger Mozza XL</div>
                    <div className="DishPriceOrder">39$</div>
                    <div className="ButtonOrder">

                        <button className="DeleteFromCreateOrder"><svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
                                fill="#797575"
                            />
                        </svg>
                        </button>
                        <button className="listCountOrder">
                            <p className="oneOrder">1</p>
                            <svg className="galochkaOrder" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0736 16.4199L0.59503 5.22919C-0.198343 4.45571 -0.198343 3.20498 0.59503 2.43974L2.5025 0.580106C3.29587 -0.193369 4.57877 -0.193369 5.36371 0.580106L13.5 8.51234L21.6363 0.580106C22.4297 -0.193369 23.7126 -0.193369 24.4975 0.580106L26.405 2.43974C27.1983 3.21321 27.1983 4.46394 26.405 5.22919L14.9264 16.4199C14.1499 17.1934 12.867 17.1934 12.0736 16.4199Z" fill="#797575" />
                            </svg>

                        </button>

                    </div>

                </div>
                <div className="DishCreateOrder">
                    <img className="DishImgOrder" ></img>
                    <div className="DishNameOrder">Burger Mozza XL</div>
                    <div className="DishPriceOrder">39$</div>
                    <div className="ButtonOrder">

                        <button className="DeleteFromCreateOrder"><svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
                                fill="#797575"
                            />
                        </svg>
                        </button>
                        <button className="listCountOrder">
                            <p className="oneOrder">1</p>
                            <svg className="galochkaOrder" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0736 16.4199L0.59503 5.22919C-0.198343 4.45571 -0.198343 3.20498 0.59503 2.43974L2.5025 0.580106C3.29587 -0.193369 4.57877 -0.193369 5.36371 0.580106L13.5 8.51234L21.6363 0.580106C22.4297 -0.193369 23.7126 -0.193369 24.4975 0.580106L26.405 2.43974C27.1983 3.21321 27.1983 4.46394 26.405 5.22919L14.9264 16.4199C14.1499 17.1934 12.867 17.1934 12.0736 16.4199Z" fill="#797575" />
                            </svg>

                        </button>

                    </div>

                </div>
                <div className="DishCreateOrder">
                    <img className="DishImgOrder" ></img>
                    <div className="DishNameOrder">Burger Mozza XL</div>
                    <div className="DishPriceOrder">39$</div>
                    <div className="ButtonOrder">

                        <button className="DeleteFromCreateOrder"><svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
                                fill="#797575"
                            />
                        </svg>
                        </button>
                        <button className="listCountOrder">
                            <p className="oneOrder">1</p>
                            <svg className="galochkaOrder" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0736 16.4199L0.59503 5.22919C-0.198343 4.45571 -0.198343 3.20498 0.59503 2.43974L2.5025 0.580106C3.29587 -0.193369 4.57877 -0.193369 5.36371 0.580106L13.5 8.51234L21.6363 0.580106C22.4297 -0.193369 23.7126 -0.193369 24.4975 0.580106L26.405 2.43974C27.1983 3.21321 27.1983 4.46394 26.405 5.22919L14.9264 16.4199C14.1499 17.1934 12.867 17.1934 12.0736 16.4199Z" fill="#797575" />
                            </svg>

                        </button>
                        
                    </div>
                    
                </div>

                </div>
                <div className="Subtotal">Sub total</div>
                <div className="rectangle1"></div>
                <div className="DeliveryFee">Delivery Fee</div>
                <div className="rectangle2"></div>
                <div className="Total">Total</div>
                <div className="Price1">117$</div>
                <div className="Price2">9$</div>
                <div className="Price3">126$</div>
            </div>

        </div>
    );
}

export default CartOrder;