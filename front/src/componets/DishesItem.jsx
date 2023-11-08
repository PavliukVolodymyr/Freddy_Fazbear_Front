// DishesItem.js
import React, {useState, useEffect} from "react";
import '../styles/DisheItem.css'
import  Axios  from "axios";
const DishesItem = ({ data }) => {
  const [ResData, setResData] = useState([]);
  const [ResId, setResId] = useState(data.restaurant)

  console.log(data.restaurant);

  useEffect(() => {
    Axios
      .get(`http://127.0.0.1:8000/api/Restaurants/${ResId}/`)
      .then((response) => {
        console.log(response.data);
        setResData(response.data);

      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);

      });
  }, [ResId]);

  return (
    <div className="dish-item">
      <img className="MainDishesImg" src={data.photo} alt="none" />
      <div className="Price">${data.cost}</div>
      <div className="NameDish">{data.name}</div>
      <div className="restaurantName">{ResData.name}</div>
      <div className="group-29">
        <div className="rectangle-24"></div>
        <div className="add">Add</div>
      </div>
    </div>
  );
};

export default DishesItem;
