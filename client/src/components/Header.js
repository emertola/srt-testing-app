import React, { Component } from "react";

import MainNavigation from "./MainNavigation";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
        openNav: false
    };

    this.closeNav = this.closeNav.bind(this)
  }

  closeNav() {
      this.setState({
          openNav: false
      })
  }

  render() {
      const {openNav} = this.state
    return (
      <div>
        <nav className="navbar navbar-custom">
          <a className="navbar-brand" href="/">
            <h2>TechServices</h2>
          </a>
          <button className="btn btn-nav-custom" onClick={() => this.setState({ openNav: true})}>
            <i className="fa fa-bars" />
          </button>
        </nav>
        <MainNavigation  openNav={openNav} closeNav={this.closeNav} />
      </div>
    );
  }
}

export default Header;
