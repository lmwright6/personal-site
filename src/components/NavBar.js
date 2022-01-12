import * as React from 'react';
import "./NavBar.css"

import {
  Link
} from "react-router-dom";


export default function NavBar() {
  return (

    <header className="navigation">
      <div className="left">
        <a>Lauren Wright</a>
      </div>
      <div className="right">
        <ul className="nav-options">
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

    </header>
  );
}