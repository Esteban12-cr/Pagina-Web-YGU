import React, { useEffect, useState } from 'react';
import './navbar.css';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? 'scrolled' : ''}`}>
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
              <a
                className="nav-link"
                href="#inicio"
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#abogada"
              >
                Abogada
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link contacto-btn"
                href="#footer"
              >
                Contacto
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}