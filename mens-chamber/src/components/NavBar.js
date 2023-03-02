import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    // background: "black",
    textDecoration: "none",
    color: "white",
    transition: "background 0.2s ease-in-out",
  };

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container-fluid">
            <NavLink
          className="navbar-brand"
          to="/Home"
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Mens Chamber
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-Link"
                activeClassName="active"
                to="/Home"
                exact
                style={linkStyles}
                activeStyle={{
                  background: "black",
                }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-Link"
                activeClassName="active"
                to="/Services"
                style={linkStyles}
                activeStyle={{
                  background: "black",
                }}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-Link"
                activeClassName="active"
                to="/Gallery"
                style={linkStyles}
                activeStyle={{
                  background: "black",
                }}
              >
                Gallery
              </NavLink>
            </li>


                        <li className="nav-item">
                            <NavLink className="nav-Link" activeClassName="active" to="/AboutUs"
                            style={linkStyles}
                            activeStyle={{
                            background: "black",
                            }}
                            >About Us</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-Link" activeClassName="active" to="/Appointment"
                            style={linkStyles}
                            activeStyle={{
                            background: "black",
                            }}
                            >Appointment</NavLink>
                        </li>
                       
                       
                     </ul>
                 </div>
            </div>
    </nav>
);
}

export default Navbar;
