import React from 'react';
import logo from '../../img/logo2.png';
import './Navbar.scss';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="logo" />
                <ul className='nav-links'>
                    <li><a className='nav-link' href="/">home</a> </li>
                    <li><a className='nav-link' href="/">about</a> </li>
                    <li><a className='nav-link active' href="/">Tours</a> </li>
                </ul>
            </nav>
        </div>
    )
};