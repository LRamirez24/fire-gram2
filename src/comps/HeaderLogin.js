import React from 'react';
import logo from '../images/black.svg';
import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";

const HeaderLogin = () => {
    return(
        <header className="main-header">
        <a href='https://luisportfolioxx.netlify.app/' target="blank" rel="noopener noreferrer" className="brand-logo"><img className="login-img box bounce-6" src={logo} alt="logo" width="100" height="100"></img>
        <div className="brand-logo-name">
          FireGram
        </div>
        </a>
        <nav className="main-nav">
        <ul>
             
        <li className="login-nav-text">
            <NavLink
      className="login-nav-text"
      activeClassName="is-active"
      activeStyle={{
          color: "#ff4a4a"
        }}
      to="/"
      exact
  >
      Home
  </NavLink>
            </li>
          
            <li className="login-nav-text">
            <NavLink
            className="login-nav-text"
            activeClassName="is-active"
            activeStyle={{
                color: "#ff4a4a"
              }}
            to="/explore"
            exact>
            Explore
            </NavLink>
            </li>

          
     
            <li  className="login-nav-text"><Link  to="login" spy={true} smooth={true}>Sign Up</Link></li>
             
          
         
              </ul>
        
        </nav>
      </header>
    )
}

export default HeaderLogin;