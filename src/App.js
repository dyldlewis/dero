import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const token = this.props.auth.getIdToken();
    console.log(token);
    console.log(process);
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <a href="http://localhost:3000">Auth0 - React</a>
          </Navbar.Brand>
          <Button className="btn-margin" onClick={this.goTo.bind(this, "home")}>
            Home
          </Button>
          {!isAuthenticated() && (
            <Button
              id="qsLoginBtn"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </Button>
          )}
        </Navbar>
      </div>
    );
  }
}

export default App;
