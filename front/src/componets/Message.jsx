import React from "react";
import '../styles/Message.css';
import myImage from '../img/message.png';

const Message = ({children}) => {
    return(
        <div className="message">
          <div className="ellipse-6"></div>
          <div className="ellipse-7"></div>
          <div className="ellipse-8"></div>
          <img className="ellipse-5" alt="none" src={myImage} />
          <div className="frame-82"> 
            <div className="frame-46">
              <div className="message">{children}</div>
            </div>
          </div>
        </div>
    )
}

export default Message;