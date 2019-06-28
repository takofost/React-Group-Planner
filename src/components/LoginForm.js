import React, { Component } from "react";
import { VERIFY_USER } from "./Events";
import $  from "jquery";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname:localStorage.getItem('name'),
      error: ""
    };

  }

  componentDidMount() {
  
      // this.props.history.push('/');
      //this.handleSubmit(e);
     // this.textInput.value=localStorage.getItem('name')
  
    //this.setState({nickname:localStorage.getItem('name')});
  
  }

  setUser = ({ user, isUser }) => {
    if (isUser) {
      this.setError("User name taken");
    } else {
      this.setError("");
      this.props.setUser(user);
    }
  };


  handleSubmit = (e) => {
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
      <div className="heh">
      <div className="bg1">
      <div className="wrapper">
      <div className="login">
        <form  id="btn-field"  onSubmit={this.handleSubmit} className="login-form">
        <h1 class="name2"> Choose your user Name </h1>
          <input
            className="form-control tr1 in"
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={this.state.nickname}
            onKeyDown={this.keyPress}
            onChange={this.handleChange}
            placeholder={"MYCoolUSername"}
           
          />
          <div className="error">{error ? error : null}</div>
        </form>

      </div>
      </div>
      </div>
      </div>
    );
  }
}
