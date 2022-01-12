import * as React from 'react';
import "./NavBar.css"

import {
  Link
} from "react-router-dom";


export default function NavBar() {
  return (

    <header className="header">
      <div className="left">
        <a href="#">Lauren Wright</a>
      </div>
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>

      </div>
      <div className="right">
        <a href="#">Welcome</a>
      </div>

    </header>
  );
}