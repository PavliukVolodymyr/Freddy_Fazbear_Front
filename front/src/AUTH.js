import React, { Component } from 'react';
import axios from 'axios';
import Background from './componets/Background';
import Header from './componets/Header';
import './styles/Auth.css'

class AUTH extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };
  

  handleLogin = () => {
    const { email, password } = this.state;

    // Відправляємо POST-запит для авторизації на сервер Django
    axios
      .post('http://127.0.0.1:8000/api/auth/', { email, password })
      .then((response) => {
        if (response.data.message === 'success') {
          this.setState({ isAuthenticated: true });
        }
      })
      .catch((error) => {
        console.error('Помилка авторизації:', error);
      });
  };

  render() {
    const { isAuthenticated } = this.state;
  
    return (
      <div>
        {isAuthenticated ? (
          <div>

          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Електронна пошта"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button onClick={this.handleLogin}>Увійти</button>
            <Background/>
        <Header/>


        <div class="authorization">
          <div class="rectangle-18"></div>
                <div class="rectangle-19">
                    <input class="enter-your-login-or-email-address"
                     placeholder="Enter your login or email address"
                     type="text"
                     value={this.state.email}
                     onChange={(e) => this.setState({ email: e.target.value })}
                     ></input>
                </div>
               <div class="rectangle-192"> 
                <input class="enter-your-password"
                 placeholder="Enter your password"
                 type="password"
                 value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                 >
                 </input>
              </div>
               <div class="rectangle-20">
                <button class="continue" onClick={this.handleLogin}>Continue</button>
               </div> 
              

            <a class="forgot-your-password" href="433">Forgot your password?</a>

          <div class="frame-23">
            <div class="group-62">
            </div>
            <div class="rectangle-22"></div>
            <div class="rectangle-23"></div>
            <div class="new-to-this-site">New to this site?</div>
          </div> 
          <div class="rectangle-202">
            <div class="create-a-new-account">Create a new account</div>
          </div>
          </div>
          </div>
        )}
      </div>
    );
  }
}
export default AUTH;
