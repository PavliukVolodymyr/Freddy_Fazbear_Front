import React from "react";
import Background from "./componets/Background";
import Header from "./componets/Header";
import AuthStatus from "./componets/AuthStatus.jsx"
import UserInterface from "./componets/UserInterface";
import './styles/UserAccount.css';

const UserAccount = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
    }


    return(
        <div>
            <Background/>
            <Header/>
            <UserInterface/>
            <AuthStatus/>
            <div class="main">
          <div class="frame-73">
            <div class="rectangle-18"></div>
          </div>
          <div class="user-icon">
            <svg
              class="user-interface-user3"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33301 44.3334C9.33301 37.8901 14.5564 32.6667 20.9997 32.6667H34.9997C41.443 32.6667 46.6663 37.8901 46.6663 44.3334C46.6663 48.1994 43.5323 51.3334 39.6663 51.3334H16.333C12.467 51.3334 9.33301 48.1994 9.33301 44.3334Z"
                fill="black"
              />
              <path
                d="M27.9997 4.66675C21.5564 4.66675 16.333 9.89009 16.333 16.3334C16.333 22.7767 21.5564 28.0001 27.9997 28.0001C34.443 28.0001 39.6663 22.7767 39.6663 16.3334C39.6663 9.89009 34.443 4.66675 27.9997 4.66675Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="user-name">
            <div class="domushkin-oleksandr">Domushkin Oleksandr</div>
          </div>
          <div class="pen-icon">
            <svg
              class="user-interface-edit"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1358 3.59638C18.6003 2.13193 20.9747 2.13194 22.4391 3.5964L23.9036 5.06086C25.3681 6.52534 25.368 8.89972 23.9036 10.3642L23.3839 10.8838L16.6161 4.11606L17.1358 3.59638Z"
                fill="url(#paint0_linear_456_1100)"
              />
              <path
                d="M7.24617 13.4961C7.07462 13.7007 6.94832 13.9401 6.87647 14.1986L5.05475 20.7521C4.7682 21.7829 5.71693 22.7317 6.74777 22.4451L13.3013 20.6234C13.5597 20.5515 13.7992 20.4252 14.0038 20.2537L7.24617 13.4961Z"
                fill="url(#paint1_linear_456_1100)"
              />
              <path
                d="M23.3838 10.884L16.6161 4.11621L7.35708 13.3751C7.31824 13.4139 7.28122 13.4543 7.24609 13.4962L14.0037 20.2538C14.0456 20.2187 14.086 20.1817 14.1248 20.1429L23.3838 10.884Z"
                fill="#FF6A3A"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_456_1100"
                  x1="23.2256"
                  y1="4.35462"
                  x2="5.32236"
                  y2="22.2578"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.208085" stop-color="#D70000" />
                  <stop offset="0.684316" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_456_1100"
                  x1="23.2256"
                  y1="4.35462"
                  x2="5.32236"
                  y2="22.2578"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.208085" stop-color="#D70000" />
                  <stop offset="0.684316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="login">
            <div class="login2">Login:</div>
            <div class="oleksandr-diomushkin-gmail-com">
              oleksandr.diomushkin@gmail.com
            </div>
          </div>
          <div class="password">
            <div class="password2">Password:</div>
            <div class="">************</div>
          </div>
          <div class="frame-68">
            <div class="rectangle-21"></div>
          </div>
          <div class="logout">
            <button class="logout2" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div class="password-recovery">
          <div class="frame-69">
            <div class="password-recovery2">Password recovery</div>
          </div>
        </div>
        </div>
    )
}

export default UserAccount;