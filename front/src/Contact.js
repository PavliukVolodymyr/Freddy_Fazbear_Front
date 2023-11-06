import React from "react";
import Background from "./componets/Background";
import Header from "./componets/Header";
import UserInterface from "./componets/UserInterface";
import AuthStatus from "./componets/AuthStatus";
import './styles/Contact.css'

function Contact(){
    return(
        <div>
            <Background/>
            <Header/>
            <UserInterface/>
            <AuthStatus/>
            <div className="main">
  <div className="rectangle-18"></div>
  <div className="frame-35">
    <div className="need-help-contact-with-us">Need help? Contact with us.</div>
    <div className="rectangle-21"></div>
    <svg
      className="user-interface-bell1"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.583 39.1667H27.4163C27.4163 41.3298 25.6628 43.0834 23.4997 43.0834C21.3366 43.0834 19.583 41.3298 19.583 39.1667Z"
        fill="black"
      />
      <path
        d="M25.467 7.83331H21.5332L19.5232 8.55636C14.8599 10.2339 11.7505 14.6569 11.7505 19.6127V26.1151C11.7505 27.552 11.0749 28.9053 9.92641 29.7688C5.91697 32.7834 8.04899 39.1666 13.0653 39.1666H33.9356C38.9519 39.1666 41.0839 32.7835 37.0746 29.7688C35.9261 28.9053 35.2505 27.552 35.2505 26.1152V19.613C35.2505 14.657 32.1409 10.2339 27.4775 8.55646L25.467 7.83331Z"
        fill="black"
      />
      <path
        d="M21.542 5.87502C21.542 4.79346 22.4188 3.91669 23.5003 3.91669C24.5819 3.91669 25.4587 4.79346 25.4587 5.87502V7.83335H21.542V5.87502Z"
        fill="black"
      />
    </svg>
  </div>
  <div className="frame-31">
    <div className="working-hours-mon-to-fri-10-00-20-00-sat-sun-10-00-17-00">
      <span
        ><span
        className="working-hours-mon-to-fri-10-00-20-00-sat-sun-10-00-17-00-span"
          >Working hours<br /></span
        ><span
          className="working-hours-mon-to-fri-10-00-20-00-sat-sun-10-00-17-00-span2"
          >Mon. to Fri. 10.00 - 20.00<br />Sat. - Sun. 10.00 - 17.00</span
        ></span
      >
    </div>
  </div>
  <div className="frame-32">
    <div className="phones-066-690-77-09-050-991-98-60">
      <span
        ><span className="phones-066-690-77-09-050-991-98-60-span"
          >Phones<br /></span
        ><span className="phones-066-690-77-09-050-991-98-60-span2"
          >(066)690-77-09<br />(050)991-98-60</span
        ></span
      >
    </div>
  </div>
  <div className="frame-33">
    <div className="address-anton-chekhov-street-20-kolomyia-ivano-frankivsk-78200">
      <span
        ><span
        className="address-anton-chekhov-street-20-kolomyia-ivano-frankivsk-78200-span"
          >Address<br /></span
        ><span
          className="address-anton-chekhov-street-20-kolomyia-ivano-frankivsk-78200-span2"
          >Anton Chekhov Street, 20, Kolomyia, Ivano-Frankivsk, 78200</span
        ></span
      >
    </div>
  </div>
  <div className="frame-34">
    <div
      className="email-address-oleksandr-diomushkin-kpk-lp-com-ua-arsen-chuiko-kpk-lp-com-ua"
    >
      <span
        ><span
        className="email-address-oleksandr-diomushkin-kpk-lp-com-ua-arsen-chuiko-kpk-lp-com-ua-span"
          >Email address<br /></span
        ><span
          className="email-address-oleksandr-diomushkin-kpk-lp-com-ua-arsen-chuiko-kpk-lp-com-ua-span2"
          >oleksandr.diomushkin@kpk-lp.com.ua<br />arsen.chuiko@kpk-lp.com.ua</span
        ></span
      >
    </div>
  </div>
</div>

        </div>
    );
}

export default Contact;