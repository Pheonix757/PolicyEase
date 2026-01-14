import React from 'react';
import { IconBook } from './Icons';
import './Header.css';

const Header = ({ onNav }) => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo" onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>
                    <IconBook className="logo-icon" />
                    <span className="logo-text">PolicyEase</span>
                </div>
                <nav className="nav">
                    <button className="nav-link" onClick={() => onNav('home')}>Home</button>
                    <button className="nav-link" onClick={() => onNav('categories')}>Categories</button>
                    <button className="nav-link" onClick={() => onNav('eligibility')}>Eligibility</button>
                    <button className="nav-link" onClick={() => onNav('about')}>About</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
