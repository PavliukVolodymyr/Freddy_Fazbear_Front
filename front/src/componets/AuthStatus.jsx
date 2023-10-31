import React, { Component } from 'react';

class AuthStatus extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
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
        <p>Ви авторизовані</p>
      </div>
    ) : (
      // Відображайте вміст для неавторизованого користувача
      <div>
        <p>Будь ласка, увійдіть</p>
      </div>
    );
  }
}

export default AuthStatus;
