import React from "react";
import './styles.css';
import CartWidget from "../CartWidget";







const Navbar =({numbersOfItems, onHandlerCart, user}) => {
  console.log('user', user);
    return ( 
        <header className="header-menu">
            <a className="navbar-brand" href="#Inicio">Chiquita
            </a>
            <nav className="header-menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
          <div className="header-menu-avatar-container">
            <img className="header-menu-avatar" src={user.avatar} alt={user.name}/>
          </div>
            <CartWidget onClick={onHandlerCart}/>
            </nav>
        </header>
    )
}

export default Navbar;