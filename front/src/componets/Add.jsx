import React from "react";
import '../styles/Add.css'
import myImage from '../img/rectangle-7.png'

const Add = () => {
    return(
        <div className="frame-2">
        <img className="rectangle-7" alt="none" src={myImage} />
        <div className="group-2">
          <svg className="rectangle-9" width="394" height="245" viewBox="0 0 394 245" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.95431 8.95431 0 20 0H216L393.5 245H20C8.95429 245 0 236.046 0 225V20Z" fill="#DA3805" />
          </svg>
  
          <svg className="rectangle-8" width="368" height="245" viewBox="0 0 368 245" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.95431 8.95431 0 20 0H254L367.5 245H20C8.95431 245 0 236.046 0 225V20Z" fill="#FF5C28" />
          </svg>
  
          <div className="group-1">
            <div className="ellipse-1"></div>
            <div className="ellipse-2"></div>
            <div className="ellipse-3"></div>
          </div>
        </div>
        <div className="group-35">
          <div className="kolomyia">Kolomyia</div>
          <div className="delivery">Delivery</div>
        </div>
      </div>
    )

}

export default Add;