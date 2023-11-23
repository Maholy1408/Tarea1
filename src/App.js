import React, { Component } from 'react';
import Login from './Login';
import Registro from './Registro';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  switchToLogin = () => {
    this.setState({ isLogin: true });
  };

  switchToRegister = () => {
    this.setState({ isLogin: false });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isLogin ? (
          <Login onSwitchToRegister={this.switchToRegister} />
        ) : (
          <Registro onSwitchToLogin={this.switchToLogin} />
        )}
      </div>
    );
  }
}

export default App;
