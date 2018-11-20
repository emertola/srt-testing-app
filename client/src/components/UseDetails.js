import React, { Component } from "react";

import OpenBrowser from './OpenBrowser'

class UseDetails extends Component {
  render() {
    const { users, openBrowser, removeUser } = this.props;

    const renderUsers = () => 
      users.map((user) => (
        <tr key={user.id}>
          <td><strong>{user.username}</strong><br /><em>{user.password}</em></td>
          <td style={{textAlign: "center"}}><OpenBrowser openBrowser={openBrowser} user={user} /></td>
          <td><button className="btn btn-sm btn-transparent" onClick={() => removeUser(user.id)} style={{color: "#0954AB"}}>Remove</button></td>
        </tr>
      ));

    const emptyUsers = () => (
        <tr>
            <td colSpan="4">No users entered.</td>
        </tr>
    )

    return (
      <div className="col-lg-12">
        <table className="table table-custom">
          <thead>
            <tr>
              <th>User</th>
              <th style={{textAlign: "center"}}>Browser</th>
              <th />
            </tr>
          </thead>
          <tbody>{users.length > 0 ? renderUsers() : emptyUsers()}</tbody>
        </table>
      </div>
    );
  }
}

export default UseDetails;
