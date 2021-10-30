import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import "./Nav.css";
import menu from './menu.jpg';
import close from './close.jpeg';
import {useRouteMatch} from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="Nav">
        <div className="nav-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/paraphraser"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Paraphraser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Summariser"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Summariser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/grammer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Grammer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;