import React from "react";
import logo from '../images/black.svg';



const Title = ({handleLogout}) => {
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
          <li >
      <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
      </li>
        </ul>
      </nav>
    </header>
    <div className="title">
      <h2>Our Pictures</h2>
      <p>"Do not go where the path may lead, go instead where there is no path and leave a trail." ― Ralph Waldo Emerson</p>
    </div>
    </>
  );
};

export default Title;
