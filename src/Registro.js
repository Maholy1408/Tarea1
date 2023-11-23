import React from 'react';
import './Registro.css'; // Asegúrate de que esta ruta sea correcta

class Registro extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstnameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: '',
    });
  };

  validateForm = () => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword,
    } = this.state;

    let hasError = false; // Variable para rastrear errores

    // Validación del nombre completo (debe tener al menos 3 caracteres)
    if (firstname.length < 3 || lastname.length < 3) {
      this.setState({ firstnameError: 'El nombre y el apellido deben tener al menos 3 caracteres.' });
      hasError = true;
    }

    // Validación del nombre de usuario (debe tener al menos 3 caracteres)
    if (username.length < 3) {
      this.setState({ usernameError: 'El nombre de usuario debe tener al menos 3 caracteres.' });
      hasError = true;
    }

    // Validación de la dirección de correo electrónico (debe ser una dirección de correo electrónico válida)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      this.setState({ emailError: 'Ingresa una dirección de correo electrónico válida.' });
      hasError = true;
    }

    // Validación de la contraseña (debe tener al menos 6 caracteres)
    if (password.length < 6) {
      this.setState({ passwordError: 'La contraseña debe tener al menos 6 caracteres.' });
      hasError = true;
    }

    // Validación de la confirmación de contraseña (debe coincidir con la contraseña)
    if (password !== confirmPassword) {
      this.setState({ confirmPasswordError: 'Las contraseñas no coinciden.' });
      hasError = true;
    }

    // Si hay errores, no se envía el formulario
    if (hasError) {
      return false;
    }

    // Si no hay errores, el formulario se envía
    return true;
  };

  render() {
    const centeredTitleStyle = {
      textAlign: 'center', // Alinea el título al centro
    };

    return (
      <div className="registration-container">
        <h2 style={centeredTitleStyle}>Registro</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="firstname">Nombre:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.firstnameError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.firstnameError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.usernameError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.emailError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.passwordError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              required
            />
            <p className="error-message">{this.state.confirmPasswordError}</p>
          </div>
          <button type="submit" onClick={this.validateForm}>
            Registrarse
          </button>
        </form>
      </div>
    );
  }
}

export default Registro;
