import React from 'react';
import '../Navbar.css'

function Navbar(props) {
    return (
        <nav className="nav">
            <a href="" className="brand">LOGO</a>
            <ul className="nav__menu">
                <li className='nav__item'>
                    <a href="" className="nav__link">Các khóa học</a>
                </li>
                <li className='nav__item'>
                    <a href="" className="nav__link">Tuyển dụng</a>
                </li>
                <li className='nav__item'>
                    <a href="" className="nav__link">Theo dõi</a>
                </li>
            </ul>
            <div className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;