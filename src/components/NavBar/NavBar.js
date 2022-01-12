import * as React from 'react';
import "./NavBar.css"
import PropTypes from 'prop-types';

import {
  Link
} from "react-router-dom";
import { PinDropTwoTone } from '@mui/icons-material';

NavBar.propTypes = {
  name: PropTypes.string,
  links: PropTypes.arrayOf(Object)
}

export default function NavBar(props) {
  return (

    <header className="navigation">
      <div className="left">
        <a>{props.name}</a>
      </div>
      <div className="right">
        <ul className="nav-options">
        {props.links.map((linkObj) => {
          return (
            <li>
              <Link to={linkObj.path}>{linkObj.title}</Link>
            </li>
          )
        })}
        </ul>
      </div>
    </header>
  );
}