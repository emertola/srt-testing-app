import React from "react";
import {Link} from 'react-router-dom'

const MainNavigation = props => {
    const {openNav, closeNav} = props;
  return (
    <div>
      <div className="overlay" style={{display: openNav ? 'block' : 'none'}}>
        <button className="btn closebtn" onClick={() => closeNav()}>&times;</button>

        <div className="overlay-content">
          <Link to="/" onClick={() => closeNav()}>Home</Link>
          <Link to="/codes" onClick={() => closeNav()}>Codes</Link>
          <Link to="/testing" onClick={() => closeNav()}>Testing</Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
