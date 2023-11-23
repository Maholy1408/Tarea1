import React, { Component } from 'react';
import './Login.css'; // Asegúrate de que esta ruta sea correcta

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: '',
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username.length < 4) {
      this.setState({ usernameError: 'El usuario debe tener al menos 4 caracteres.' });
    }

    if (password.length < 8) {
      this.setState({ passwordError: 'La contraseña debe tener al menos 8 caracteres.' });
    }

    // Lógica de inicio de sesión (personalizar según sea necesario)
  };

  handleRegisterClick = () => {
    this.props.onSwitchToRegister();
  };

  render() {
    return (
      <div className="login-container">
        <div className="logo-container">
          <img src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png" alt="Descripción de la imagen" width="300" height="200" />
        </div>
        <h2 className="centered-title">Iniciar Sesión</h2>
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.usernameError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.passwordError}</p>
          </div>
          <input type="submit" value="Iniciar Sesión" />
          <div className="form-group">
            <button onClick={this.handleRegisterClick}>Registrarse</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
