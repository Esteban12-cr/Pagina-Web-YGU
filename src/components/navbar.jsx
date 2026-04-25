import React from 'react';
import '../Styles/navbar.css';

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">

        <a className="navbar-brand" href="#">
          YGU Abogada
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Abogadas</a>
            </li>

            <li className="nav-item">
              <a className="nav-link contacto-btn" href="#">Contacto</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}