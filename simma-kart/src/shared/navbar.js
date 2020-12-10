import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import logo from '../images/Logo.webp';

export const NavBar = (props) => {
    return (              
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <img style={{width:"9%"}} src={logo}></img>
                <a className="navbar-brand js-scroll-trigger" href="#">Simma Art</a>                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">                            
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/'>Home</Link>
                        </li>                        
                        <li className="nav-item mx-0 mx-lg-1">                            
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/about'>About</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">                            
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">                            
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/'>Portfolio</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">                            
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/login'>Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}