import React from "react";
import '../styles/RestaurantItem.css';


const RestaurtantItem = ({data}) =>{
  return(
        <div className="listItem">
            <img className="MainRestourantsImg" alt="none" src={data.photo} />
            <div className="NameRestourants">{data.name}</div>
            <svg
              className="RatingIcon"
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
            <div className="Rating">{data.rating}%</div>
            <div className="TypeRestaurants">{data.type}</div>
          </div>
    )
}

export default RestaurtantItem;