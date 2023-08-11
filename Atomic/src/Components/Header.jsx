import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>
          <Link to="/"> Atomic Sweet Shop</Link>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/vitrine" activeClassName="active">Vitrine</NavLink>
          </li>
          <li>
            <NavLink exact to="/sobre" activeClassName="active">Sobre</NavLink>
          </li>
          <li>
            <NavLink exact to="/form" activeClassName="active">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
