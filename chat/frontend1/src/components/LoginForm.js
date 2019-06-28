import React, { Component } from "react";
import { VERIFY_USER } from "./Events";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "sdsd",
      error: ""
    };
  }
  componentDidUpdate() {
    console.log("LoginScreen: ", this.props);
    if (this.textInput.value !== null) {
      console.log(this.props);
      // this.props.history.push('/');
      //this.handleSubmit(e);
    }
  }

  setUser = ({ user, isUser }) => {
    if (isUser) {
      this.setError("User name taken");
    } else {
      this.setError("");
      this.props.setUser(user);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { socket } = this.props;
    const { nickname } = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser);
  };

  handleChange = e => {
    this.setState({ nickname: e.target.value });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <label htmlFor="nickname" />
          <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"MYCoolUSername"}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}
