import React, { useState } from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='home-header'>
            <div className="header-top">
                <NavLink to="/portfolio/" exact className='no-decor-links' activeClassName='active' onClick={toggleMenu}>
                    <h1 className='h1-name-header'>
                        Ayda Gonzalez
                    </h1>
                </NavLink>

                <button className="menu-button" onClick={toggleMenu}>
                    <img className="menu-button-icon" src="/menu-bar.png" alt="menu" />
                </button>
            </div>
            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <NavLink to="/portfolio/" exact className='nav-link' activeClassName='active' onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/projects" className='nav-link' activeClassName='active' onClick={toggleMenu}>Projects</NavLink>
                {/* <NavLink to="/experience" className='nav-link' activeClassName='active' onClick={toggleMenu}>Experience</NavLink> */}
                <NavLink to="/contact" className='nav-link' activeClassName='active' onClick={toggleMenu}>Contact</NavLink>
            </nav>
        </header>
    );
}
