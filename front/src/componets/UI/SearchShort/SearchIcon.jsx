import React from "react";
import '../../../styles/UI/SearchShort/SearchIcon.css'

const SearchIcon = ({children}) =>{
    return(
        <div className="searchDiv">
        <svg className="searchBack" width="900" height="74" viewBox="0 0 900 74" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3_13)">
            <path d="M0 0H900V74H0V0Z" fill="url(#paint0_linear_3_13)" shapeRendering="crispEdges" />
          </g>
          <defs>
            <filter id="filter0_d_3_13" x="-4" y="0" width="908" height="82" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_13" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_13" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_3_13" x1="450" y1="0" x2="450" y2="74" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3F3F3" stop-opacity="0.49" />
              <stop offset="0.979167" stop-color="#F3F3F3" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="SearchIcon" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.6582 22.3728L19.79 17.3342C19.5703 17.1068 19.2725 16.9805 18.96 16.9805H18.1641C19.5117 15.1965 20.3125 12.9527 20.3125 10.5117C20.3125 4.70501 15.7666 0 10.1562 0C4.5459 0 0 4.70501 0 10.5117C0 16.3184 4.5459 21.0234 10.1562 21.0234C12.5146 21.0234 14.6826 20.1946 16.4062 18.7998V19.6236C16.4062 19.947 16.5283 20.2553 16.748 20.4827L21.6162 25.5212C22.0752 25.9963 22.8174 25.9963 23.2715 25.5212L24.6533 24.091C25.1123 23.616 25.1123 22.8478 24.6582 22.3728ZM10.1562 16.9805C6.7041 16.9805 3.90625 14.0897 3.90625 10.5117C3.90625 6.93875 6.69922 4.04297 10.1562 4.04297C13.6084 4.04297 16.4062 6.93369 16.4062 10.5117C16.4062 14.0847 13.6133 16.9805 10.1562 16.9805Z"
            fill="#797575" />
        </svg>
        {children}
      </div>
    )
}

export default SearchIcon;