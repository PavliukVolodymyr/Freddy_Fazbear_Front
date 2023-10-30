import React, { useState, useEffect} from "react";
import '../styles/DisheItem.css';
import axios from 'axios';

const DishesItem = () =>{
    const [dishData, setDishData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Dishes/1/')
            .then((response) =>{
                setDishData(response.data);
            })
            .catch((error) => {
                console.error('Помилка запиту до API', error);
            });
    }, []);

    if(!dishData){
        return <div>Loading...</div>
    }
    return(
        <div>
            <img class="MainDishesImg" alt="none" src={dishData.photo} />
            <div class="Price">${dishData.cost}</div>
            <div class="NameDish">{dishData.name}</div>
            <div class="restaurantName">{dishData.restaurant_name}</div>
            
            <div class="group-29">
                <div class="rectangle-24"></div>
                <div class="add">Add</div>
            </div>
        </div>
    )
}

export default DishesItem;