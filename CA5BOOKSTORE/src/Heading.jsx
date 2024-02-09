import React from "react";
import { Link } from "react-router-dom";
import './App.css';

export default function Header() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Book Haven
        </Link>
        <Link id="register" to="/registration-form">Register</Link>
      </nav>
    </div>
  );
}