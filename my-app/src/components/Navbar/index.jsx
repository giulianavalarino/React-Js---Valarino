import React from "react";
import './styles.css';
import CartWidget from "../CartWidget";







const Navbar =() => {
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
            <CartWidget/>
            </nav>
        </header>
    )
}

export default Navbar;