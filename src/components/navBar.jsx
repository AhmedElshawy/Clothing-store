import React, { Component } from "react";
import {Link} from 'react-router-dom'

class NavBar extends Component {

  state = {};
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className='nav-links'>
            <li>
              <Link to="/">Jeans</Link>
            </li>
            <li>
              <Link to="/">Jackets</Link>
            </li>
            <li>
              <Link to="/">Dresses</Link>
            </li>
            
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Subscribe</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
