import React, { Component } from 'react';
import axios from 'axios';
import Background from './componets/Background';
import Header from './componets/Header';
import './styles/Auth.css'
import { Link } from 'react-router-dom';


class AUTH extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };
  
  linkTopRated = () => {
    window.location.href = "/"
  }

  handleLogin = () => {
    const { email, password } = this.state;

    // Відправляємо POST-запит для авторизації на сервер Django
    axios
      .post('http://127.0.0.1:8000/api/auth/', { email, password })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === 'success') {
          this.setState({ isAuthenticated: true });
          localStorage.setItem('token', response.data.token)
          window.location.href = "/";
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
           
            <Background/>
        <Header/>


        <div className="authorization">
          <div className="rectangle-18888"></div>
                <div className="rectangle-19">
                    <input className="enter-your-login-or-email-address"
                     placeholder="Enter your login or email address"
                     type="email"
                     value={this.state.email}
                     onChange={(e) => this.setState({ email: e.target.value })}
                     ></input>
                </div>
               <div className="inputPassword"> 
                <input className="enter-your-password"
                 placeholder="Enter your password"
                 type="password"
                 value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                 >
                 </input>
              </div>
               <div className="rectangle-2032">
                <button className="continue12" onClick={this.handleLogin}>Continue</button>
               </div> 
              

            <a className="forgot-your-password" href="433">Forgot your password?</a>

          <div className="frame-23">
            <div className="group-62">
            </div>
            <div className="rectangle-22"></div>
            <div className="rectangle-23"></div>
            <div className="new-to-this-site">New to this site?</div>
          </div> 
          <Link to={'/Registration'} className="rectangle-202">
            <div className="create-a-new-account">Create a new account</div>
          </Link>
          </div>
          </div>
        )}
      </div>
    );
  }
}
export default AUTH;
