import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import AddLink from "./AddLink";
import AddUser from "./AddUser";
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
    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  importDetails() {
    navigator.clipboard.readText().then(text => {
      let a = text.split("|")
      this.setState({
        url: a[0],
        users: JSON.parse(a[1])
      })
    })
  }



  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <Button color="secondary" onClick={() => this.importDetails()}>
                Import details
              </Button>
            </div>
            <AddLink
              urlChange={this.urlChange}
              openBrowser={this.openBrowser}
              importURL={this.state.url}
            />
            <AddUser
              openBrowser={this.openBrowser}
              addUserObj={this.addUserObj}
            />

            <UseDetails
              users={this.state.users}
              openBrowser={this.openBrowser}
              removeUser={this.removeUser}
            />
          </div>
        </div>

       
      </div>
    );
  }
}

export default Testing;
