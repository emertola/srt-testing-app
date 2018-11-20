import React, { Component } from "react";
import { Switch, NavLink, Route } from "react-router-dom";

import Common from "./Common";
import Onboarding from "./Onboarding";

class Codes extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className="codes-container">
        <div className="sidebar">
          <NavLink to={match.path} activeClassName="activeLink" exact>Common</NavLink>
          <NavLink to={`${match.path}/onboarding`} exact activeClassName="activeLink">Onboarding</NavLink>
        </div>

        <div className="content">
          <Switch>
            <Route path={match.path} exact component={Common} />
            <Route
              path={`${match.path}/onboarding`}
              exact
              component={Onboarding}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Codes;
