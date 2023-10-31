import React, { Component } from 'react';
import ProfileIcon from './ProfileIcon'
import AuthIcon from './AuthIcon';

class AuthStatus extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      token: localStorage.getItem('token'),
    };
  }

  componentDidMount() {
    // Перевірте тут наявність токена в локальному сховищі або куках
    const token = localStorage.getItem('token'); // Залежно від вашого способу зберігання токена
    if (token) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    const { isAuthenticated } = this.state;

    return isAuthenticated ? (
      // Відображайте вміст для авторизованого користувача
      <div>
        <ProfileIcon/>
      </div>
    ) : (
      // Відображайте вміст для неавторизованого користувача
      <div>
        <AuthIcon/>
      </div>
    );
  }
}

export default AuthStatus;
