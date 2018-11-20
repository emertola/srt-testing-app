import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Codes from "./Codes";
import Testing from './Testing'

const Home = () => <h2>This is home</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/codes" component={Codes} />
              <Route path="/testing" component={Testing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
