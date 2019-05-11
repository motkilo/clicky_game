import React from "react";
import "./style.css";

function NavBar(props) {

    return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbrand">Click Game</div>
          </div>
          <ul className="navbar-right">
            <h2 className="guess">{props.guessTracker}</h2>
              <li><span className="fas fa-sd-card"></span>Current Score: {props.score}</li>
              <li> | </li>
              <li><span className="fas fa-trophy">High Score: {props.highScore}</span></li>
          </ul>
        </div>
        <hr></hr>
      </nav>
    );
}

export default NavBar;