import React from "react";
import '../../../styles/UI/SearchLong/SearchIcon.css'

const SearchIcon = ({children}) =>{
    return(
        <div className="searchIcon">
          <svg
            className="Background"
            width="1554"
            height="76"
            viewBox="0 0 1554 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_487_256)">
              <path
                d="M0 0H1554V76H0V0Z"
                fill="url(#paint0_linear_487_256)"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_487_256"
                x="-4"
                y="0"
                width="1562"
                height="84"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_487_256"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_487_256"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_487_256"
                x1="777"
                y1="0"
                x2="777"
                y2="76"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3F3F3" stop-opacity="0.49" />
                <stop offset="0.979167" stop-color="#F3F3F3" stop-opacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="Icon"
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.6056 26.8015L22.9581 20.7656C22.7032 20.4931 22.3577 20.3418 21.9952 20.3418H21.0719C22.6352 18.2047 23.5642 15.5166 23.5642 12.5925C23.5642 5.63636 18.2906 0 11.7821 0C5.27363 0 0 5.63636 0 12.5925C0 19.5487 5.27363 25.185 11.7821 25.185C14.5181 25.185 17.0331 24.1922 19.0326 22.5212V23.5081C19.0326 23.8955 19.1743 24.2648 19.4292 24.5373L25.0766 30.5732C25.6091 31.1423 26.4701 31.1423 26.9969 30.5732L28.5999 28.8599C29.1324 28.2908 29.1324 27.3706 28.6056 26.8015ZM11.7821 20.3418C7.77733 20.3418 4.53158 16.8788 4.53158 12.5925C4.53158 8.31227 7.77166 4.84328 11.7821 4.84328C15.7869 4.84328 19.0326 8.30622 19.0326 12.5925C19.0326 16.8728 15.7926 20.3418 11.7821 20.3418Z"
              fill="#797575"
            />
          </svg>
          <div>
            {children}
          </div>
        </div>
    )
}

export default SearchIcon;