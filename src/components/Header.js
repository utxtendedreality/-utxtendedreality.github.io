import React, { useState, useEffect } from "react";
import logo from "../utxr-logo-dark.png";
import "./Header.css";
import '../fonts.css';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const goTo = (path) => () => {
    navigate(path);
  
    if(window.innerWidth <= 600) {
      setDropdownOpen(false);
    }
  };
  

  const toggleMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="UTXR logo" className="logo" />
      </div>

      <div className="nav-section">
        <button className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`} onClick={goTo('/home')}>Home</button>
        <button className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`} onClick={goTo('/about')}>About</button>
        <button className={`nav-button ${location.pathname === '/event' ? 'active' : ''}`} onClick={goTo('/event')}>Event</button>
        <button className={`nav-button ${location.pathname === '/project' ? 'active' : ''}`} onClick={goTo('/project')}>Project</button>
        <button className={`nav-button ${location.pathname === '/form' ? 'active' : ''}`} onClick={goTo('/form')}>Form</button>
      </div>

      <button className="dropdown-menu-button" onClick={toggleMenu}>Menu</button>

      <div className={`dropdown-menu ${dropdownOpen ? 'open' : 'closing'} ${location.pathname !== '/' ? 'hide-on-desktop' : ''}`}>
      <button className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`} onClick={goTo('/home')}>Home</button>
        <button className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`} onClick={goTo('/about')}>About</button>
        <button className={`nav-button ${location.pathname === '/event' ? 'active' : ''}`} onClick={goTo('/event')}>Event</button>
        <button className={`nav-button ${location.pathname === '/project' ? 'active' : ''}`} onClick={goTo('/project')}>Project</button>
        <button className={`nav-button ${location.pathname === '/form' ? 'active' : ''}`} onClick={goTo('/form')}>Form</button>
      </div>


      <div className="right-section">
        {/* Placeholder for right section content */}
      </div>
    </header>
  );
}
