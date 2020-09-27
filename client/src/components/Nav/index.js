import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

//  YOUR NAV COMPONENT HERE
function Nav(props) {
        return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Google Books
            </Link>
            <div>
            <ul className="navbar-nav margin-left">
                <li className="nav-item">
                <Link to="/search"
                    className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                    Search
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/saved"
                    className={
                    window.location.pathname === "/saved"  ? "nav-link active"  : "nav-link"}
                >
                    Saved
                </Link>
                </li>
            </ul>
            </div>
        </nav>
        );
}
export default Nav;
