import React, { Component } from "react";
import Payments from "../Payments";
class Header extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="sass.html">Login with Google</a>
            </li>
            <li>
              <Payments />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
