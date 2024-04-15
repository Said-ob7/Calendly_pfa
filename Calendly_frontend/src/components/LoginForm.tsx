import * as React from "react";
import classNames from "classnames";

// Define types for the props and state
type LoginFormProps = {
  onLogin: (event: React.FormEvent, login: string, password: string) => void;
  onRegister: (
    event: React.FormEvent,
    firstName: string,
    lastName: string,
    login: string,
    password: string
  ) => void;
};

type LoginFormState = {
  active: "login" | "register";
  firstName: string;
  lastName: string;
  login: string;
  password: string;
};

export default class LoginForm extends React.Component<
  LoginFormProps,
  LoginFormState
> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      active: "login",
      firstName: "",
      lastName: "",
      login: "",
      password: "",
    };
  }

  // Correct typing for event handlers
  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  onSubmitLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.onLogin(e, this.state.login, this.state.password);
  };

  onSubmitRegister = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.login,
      this.state.password
    );
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={classNames(
                  "nav-link",
                  this.state.active === "login" ? "active" : ""
                )}
                id="tab-login"
                onClick={() => this.setState({ active: "login" })}
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={classNames(
                  "nav-link",
                  this.state.active === "register" ? "active" : ""
                )}
                id="tab-register"
                onClick={() => this.setState({ active: "register" })}
              >
                Register
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className={classNames(
                "tab-pane",
                "fade",
                this.state.active === "login" ? "show active" : ""
              )}
              id="pills-login"
            >
              <form onSubmit={this.onSubmitLogin}>
                <div className="form-outline mb-4">
                  <input
                    type="login"
                    id="loginName"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Log in
                </button>
              </form>
            </div>
            <div
              className={classNames(
                "tab-pane",
                "fade",
                this.state.active === "register" ? "show active" : ""
              )}
              id="pills-register"
            >
              <form onSubmit={this.onSubmitRegister}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="firstName">
                    First name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="lastName">
                    Last name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="login"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="login">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
