import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <Link to="/home">
            <div className="logo">Forsaa store</div>
          </Link>

          <div className="right-div">
            <Link to="/cart">
              <i className="fas fa-shopping-cart">
                <span className="tooltiptext">
                  {this.props.countingProducts}
                </span>
              </i>
            </Link>
            <i className="fas fa-search"></i>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
