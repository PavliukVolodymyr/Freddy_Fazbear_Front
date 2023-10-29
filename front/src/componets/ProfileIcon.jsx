import React from "react";
import '../styles/ProfileIcon.css';

const ProfileIcon = () =>{
    return(
        <div className="ProfileIcon">
        <p className="UserBackground"></p>
          <svg
            className="user-interface-user2"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 23.75C5 20.2982 7.79822 17.5 11.25 17.5H18.75C22.2018 17.5 25 20.2982 25 23.75C25 25.8211 23.3211 27.5 21.25 27.5H8.75C6.67893 27.5 5 25.8211 5 23.75Z"
              fill="black"
            />
            <path
              d="M15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5Z"
              fill="black"
            />
          </svg>
        </div>
    )

}

export default ProfileIcon;