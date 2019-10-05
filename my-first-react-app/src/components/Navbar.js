import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-Ironhack">
          <img
            className="logo"
            src={'/images/ironhack-logo.svg'}
            alt="Ironhack Logo"
          />
        </div>
        <div className="logo-Hamburguer">
          <img
            className="logo"
            src={'/images/menu-top.svg'}
            alt="Menu hamburguer Logo"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
