import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation-menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className='nav-li-1'><Link to='/'>Home</Link></li>
        <li className='nav-li-2'><Link to='about'>About</Link></li>
        <li className='nav-li-3'><Link to='/projects'>Projects</Link></li>
        <li className='nav-li-4'><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
