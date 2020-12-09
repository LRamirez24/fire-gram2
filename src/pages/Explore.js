import React, { useState} from "react";
import logo from '../images/black.svg';
import ImageGrid from "../comps/ImageGrid";

import Modal from "../comps/Modal";
import { NavLink } from "react-router-dom";


const Explore = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <>
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

            <li className="login-nav-text">
            <NavLink
            className="login-nav-text"
            activeClassName="is-active"
            to="/"
            exact>
            Sign Up
            </NavLink>
            </li>
     
    
             
          
         
              </ul>
        
        </nav>
      </header>
        <div className="title">
          <h2>Our Pictures</h2>
          <p>"Do not go where the path may lead, go instead where there is no path and leave a trail." ― Ralph Waldo Emerson</p>
        </div>
        <ImageGrid setSelectedImg={setSelectedImg} />
           {selectedImg && (
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
           )}
        </>
    )
}

export default Explore;