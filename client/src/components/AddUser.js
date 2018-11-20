import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.clearUser = this.clearUser.bind(this);
  }

  inputChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  submitUser() {
    const { addUserObj } = this.props;
    addUserObj(this.state);
    this.clearUser();
  }

  clearUser() {
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="card card-custom-user">
          <div className="card-body">
            <div className="form-row align-items-center">
              <div className="col-lg-4">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={this.inputChange}
                  value={this.state.username}
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.inputChange}
                  value={this.state.password}
                />
              </div>

              <div className="col-lg-4">
                <button
                  type="submit"
                  className="btn btn-secondary-custom btn-transparent"
                  onClick={this.submitUser}
                >
                  <i className="fa fa-plus" /> Add user
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-sm btn-transparent"
                  onClick={() => this.clearUser()}
                >
                  Clear the fields
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
