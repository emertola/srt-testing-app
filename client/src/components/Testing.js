import React, { Component } from "react";
import axios from "axios";

import AddLink from './AddLink'
import AddUser from './AddUser'
import UseDetails from "./UseDetails";

class Testing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      users: []
    };

    this.urlChange = this.urlChange.bind(this);
    this.openBrowser = this.openBrowser.bind(this);
    this.addUserObj = this.addUserObj.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  urlChange(e) {
    this.setState({
      url: e.target.value
    });
  }

  openBrowser(browser, user) {
    axios
      .post(`/webdriver/${browser}`, {
        url: `https://${this.state.url}`,
        user
      })
      .then(res => console.log(res));
    // console.log(user)
  }

  addUserObj(userObj) {
    const userID = Date.now();
    userObj.id = userID;

    this.setState(prevState => ({
      users: [...prevState.users, userObj]
    }));
  }

  removeUser(id) {
    const { users } = this.state;
    const userIndex = users.findIndex(user => user.id === id);
    const userUpdate = [
      ...users.slice(0, userIndex),
      ...users.slice(userIndex + 1)
    ];
    this.setState({
      users: userUpdate
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <AddLink urlChange={this.urlChange} openBrowser={this.openBrowser} />
          <AddUser openBrowser={this.openBrowser}
          addUserObj={this.addUserObj} />
          
          <UseDetails
            users={this.state.users}
            openBrowser={this.openBrowser}
            removeUser={this.removeUser}
          />
        </div>
      </div>
    );
  }
}

export default Testing;
