import React, {useState} from "react";
import '../styles/OrdersItems.css'
import CountSelector from "./CountSelector";

const OrdersItem = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  return (
    <div className="container">
      <div className="DishOrder">
        <img className="DishImg" ></img>
        <div className="DishName">Burger Mozza XL</div>
        <div className="DishPrice">39$</div>
        <div className="Button">

         <button className="DeleteFromOrder"><svg
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

          {/* <p className="one">1</p>
          <svg className="galochka" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0736 16.4199L0.59503 5.22919C-0.198343 4.45571 -0.198343 3.20498 0.59503 2.43974L2.5025 0.580106C3.29587 -0.193369 4.57877 -0.193369 5.36371 0.580106L13.5 8.51234L21.6363 0.580106C22.4297 -0.193369 23.7126 -0.193369 24.4975 0.580106L26.405 2.43974C27.1983 3.21321 27.1983 4.46394 26.405 5.22919L14.9264 16.4199C14.1499 17.1934 12.867 17.1934 12.0736 16.4199Z" fill="#797575" />
          </svg> */}
        <CountSelector className="listCount" initialValue={selectedQuantity} onQuantityChange={handleQuantityChange} />

        
        </div>
        
      </div>
      <div className="RestaurantOrder">
        <img className="RestaurantIMG" alt="none"/>
        <div className="RestaurantName">Chicke Hut</div>
        <div className="Rating1">100%</div>
        <svg
              className="RatingIcon1"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42563 6.87082L8.68472 6.83352L8.80169 6.59935L11.6089 0.979704C11.9293 0.33887 12.8613 0.341151 13.1824 0.980271C13.1824 0.980328 13.1825 0.980384 13.1825 0.980441L15.9893 6.59935L16.1063 6.83352L16.3654 6.87082L22.6463 7.77491L22.6467 7.77496C23.3695 7.87848 23.6422 8.74663 23.132 9.23711L23.1318 9.23725L18.5877 13.6092L18.3962 13.7934L18.4418 14.0552L19.5165 20.2308C19.6357 20.9186 18.8941 21.4692 18.2448 21.132L18.2447 21.132L12.6258 18.216L12.3955 18.0964L12.1652 18.216L6.54632 21.132L6.54476 21.1328C5.89891 21.4709 5.15483 20.9215 5.27453 20.2308L6.34924 14.0552L6.3948 13.7934L6.2033 13.6092L1.6592 9.23725L1.65906 9.23711C1.14886 8.74663 1.42151 7.87848 2.14435 7.77497L2.14471 7.77491L8.42563 6.87082Z"
                fill="#FF5C28"
                stroke="black"
              />
            </svg>
        <div className="RestaurantType1">Fast food</div>
      </div>
    </div>
  );
}

export default OrdersItem;