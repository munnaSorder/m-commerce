import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const ProductNav = () => {
    return (
        <div className="sub-nav-container d-flex align-item-center">
            <Link to="/#" className="sub-nav-item">Mobile</Link>
            <Link to="/#" className="sub-nav-item">Laptop</Link>
            <Link to="/#" className="sub-nav-item">Accessory</Link>
            <Link to="/#" className="sub-nav-item">Computer</Link>
            <Link to="/#" className="sub-nav-item">Watch</Link>
            <Link to="/#" className="sub-nav-item">Camera</Link>
            <Link to="/#" className="sub-nav-item">Monitor</Link>
            <Link to="/#" className="sub-nav-item">MacBook</Link>
            <Link to="/#" className="sub-nav-item">Backpack</Link>
            <Link to="/#" className="sub-nav-item">Backpack</Link>
        </div>
    );
};

export default ProductNav;