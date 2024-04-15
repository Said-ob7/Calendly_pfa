import { request, setAuthHeader } from "../axios_helper";
import React, { Component } from "react";
import LoginForm from "./LoginForm";
import AuthContent from "./AuthContent";

interface AppContentState {
  componentToShow: "welcome" | "login" | "messages";
}

export default class AppContent extends Component<{}, AppContentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      componentToShow: "login", // Set initial state to "login"
    };
  }

  login = () => {
    // No need to change state on login click as form is always shown
  };

  logout = () => {
    this.setState({ componentToShow: "welcome" });
    setAuthHeader(null);
  };

  onLogin = (e: React.FormEvent, username: string, password: string) => {
    e.preventDefault();
    request("POST", "/login", {
      login: username,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        this.setState({ componentToShow: "messages" });
      })
      .catch((error) => {
        setAuthHeader(null);
        this.setState({ componentToShow: "welcome" });
      });
  };

  onRegister = (
    event: React.FormEvent,
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) => {
    event.preventDefault();
    request("POST", "/register", {
      firstName: firstName,
      lastName: lastName,
      login: username,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        this.setState({ componentToShow: "messages" });
      })
      .catch((error) => {
        setAuthHeader(null);
        this.setState({ componentToShow: "welcome" });
      });
  };

  render() {
    return (
      <>
        {this.state.componentToShow === "login" && (
          <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />
        )}
        {this.state.componentToShow === "messages" && <AuthContent />}
        {/* No need to conditionally render login button or logout button */}
      </>
    );
  }
}
