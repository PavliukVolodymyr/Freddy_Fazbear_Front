import React, { useState } from "react";
import Background from "./componets/Background";
import './styles/Registration.css';
import Header from "./componets/Header";
import axios from 'axios';
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Паролі не співпадають');
      return;
    }

    const registrationData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
    };

    const apiUrl = 'http://127.0.0.1:8000/register_customer/';

    axios.post(apiUrl, registrationData)
      .then((response) => {
        alert('Успішна реєстрація');
        console.log('Успішна реєстрація:', response.data);
        window.location.pathname = '/Auth'
      })
      .catch((error) => {
        console.error('Помилка реєстрації:', error);
        // Додайте обробку помилки, якщо потрібно
      });
  }

  return (
    <div>
      <Background />
      <Header />
      <div className="authorization">
        <div className="rectangleFirst">
          <input
            className="Re-EnterYourPassword"
            placeholder="Enter your first name"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rectangleLast">
          <input
            className="Re-EnterYourPassword"
            placeholder="Enter your last name"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rectangleEmail">
          <input
            className="Re-EnterYourPassword"
            placeholder="Enter your email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rectanglePassword">
          <input
            className="Re-EnterYourPassword"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rectanglePassword2">
          <input
            className="Re-EnterYourPassword"
            placeholder="Re-Enter your password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="passwords-must-be-at-least-6-characters">
          Passwords must be at least 6 characters.
        </div>
        <Link to={'/Auth'} className="rectangle-202020">
          <button className="continue1" onClick={handleSubmit}>Continue</button>
        </Link>
        <div className="frame-21">
          <div className="rectangle-22"></div>
          <div className="rectangle-23"></div>
          <div className="already-have-an-account">Already have an account?</div>
          <Link to={'/Auth'} className="group-63">
            <div className="rectangle-20"></div>
            <div className="sing-in">Sign in</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration;
