import React, { Component } from "react";
import $ from "jquery";

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isTyping: false,
      div: null,
      radiobutton: []
    };
  	this.scrollDown = this.scrollDown.bind(this)
  }
  componentDidMount() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
    });
    $("#sidebarCollapse1").on("click", function() {
      $("#sidebar").toggleClass("active");
    });
   // console.log(this.props.messages);
    this.scrollDown()
  }
  handleSubmit = e => {
    e.preventDefault();
    this.sendMessage();
    this.setState({ message: "" });
  };

  sendMessage = () => {
    this.props.sendMessage(this.state.message);
  };

  componentWillUnmount() {
    this.stopCheckingTyping();
  }

  sendTyping = () => {
    this.lastUpdateTime = Date.now();
    if (!this.state.isTyping) {
      this.setState({ isTyping: true });
      this.props.sendTyping(true);
      this.startCheckingTyping();
    }
  };

  /*
   *	startCheckingTyping
   *	Start an interval that checks if the user is typing.
   */
  startCheckingTyping = () => {
    console.log("Typing");
    this.typingInterval = setInterval(() => {
      if (Date.now() - this.lastUpdateTime > 300) {
        this.setState({ isTyping: false });
        this.stopCheckingTyping();
      }
    }, 300);
  };

  /*
   *	stopCheckingTyping
   *	Start the interval from checking if the user is typing.
   */
  stopCheckingTyping = () => {
    console.log("Stop Typing");
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.props.sendTyping(false);
    }
  };
  poll = () => {
    // 	//this.setState({radiobutton:'<p>What is your gender?</p><input type="radio" name="gender" value="male"> Male ></input><input type="radio" name="gender" value="female"> Female></input><input type="submit" value="Submit"/>'})
    // 	var radioInput = document.createElement('input');
    // 	radioInput.setAttribute('type', 'radio');
    // 	radioInput.setAttribute('id', "1");
    // 	// let dummy = Object.assign([],this.state.radiobutton)
    // 	// dummy.concat(radioInput)
    // //	this.setState({radiobutton:radioInput});
  };

  scrollDown(){
		const { container1 } = this.refs
		container1.scrollTop = container1.scrollHeight
  }
  componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}
  render() {
    const { message } = this.state;
    const { messages, user, typingUsers } = this.props;

    return (
      <div className="">
        <section className="bg">
          <div className="wrapper">
            <nav id="sidebar">
              <div className="sidebar-header text-center mt-2">
                <h2>Welcome</h2>
                <h2> ABC </h2>
              </div>

              <ul className="list-unstyled components">
                <p className="text-center">Your Plans</p>
                <div className="plan">
                  <p className="text-center color-text">Miami Trip</p>
                  <p className="text-center color-text">Friday Night Dinner</p>
                  <p className="text-center color-text">Wedding 2020</p>
                  <p className="text-center color-text">4th of July BBQ</p>
                  <p className="text-center color-text">Beach Weekend</p>
                  <p className="text-center color-text">Bachelor Party</p>
                </div>
              </ul>
            </nav>
            <div id="content">
              <div className="row">
                <div className="col-1">
                  <button
                    type="button"
                    id="sidebarCollapse1"
                    className="btn btn-info"
                  >
                    <i className="fas fa-align-left" />
                  </button>
                </div>
                <div className="col-5">
                  <p id="countDown" className="timer1" />
                  <h3 className="txt"> - TO MIAMI. FL</h3>
                  <img src="assets/images/sun.png" className="sun" alt="sun" />
                  <div className="mssg" />
                  <div className="mssg1" />
                  <div className="mssg2" />
                </div>
                <div className="col-6">
                  <div className="group_div mt-1">
                    <p className="spc" />
                    <div className="group_chat_name">
                      <p className="pt-3 blk">(Group Chat Name)</p>
                    </div>
                    <div className="gr_div" ref='container1'>
                      {messages.map(mes => {
                        return (
                          <div 
                            key={mes.id}
                            className={`message-container ${mes.sender ===
                              user.name && "left"}`}
                          >
                            <div className="time" style={{fontSize:"9px",color:"white"}}>{mes.time}</div>
                            <div className="data">
                              <div className="message" style={{fontSize:"16px",color:"black"}}>{mes.message}</div>
                              <div className="" style={{fontSize:"10px",color:"orange"}}>{mes.sender}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="group_chat_name">
                      {/* <input type="text" className="msg"/> */}
                      <form onSubmit={this.handleSubmit} className="">
                        <input
                          id="message"
                          ref={"messageinput"}
                          type="text"
                          className="msg"
                          value={message}
                          autoComplete={"off"}
                          placeholder="Type something interesting"
                          onKeyUp={e => {
                            e.keyCode !== 13 && this.sendTyping();
                          }}
                          onChange={({ target }) => {
                            this.setState({ message: target.value });
                          }}
                        />
                        <button
                          disabled={message.length < 1}
                          type="submit"
                          className="send"
                        >
                          Send{" "}
                        </button>
                      </form>
                      {/* <button onClick={this.poll}>poll</button> */}
                      {/* <img src="assets/images/msg_icon.png" alt="msgicon" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// class Radio extends Component{
// 	render(){
// 		return(
// 			<div>
// 	<p>What is your gender?</p>
// 	<input type="radio" name="gender" value="male"> Male ></input>
// 	<input type="radio" name="gender" value="female"> Female></input>
// 	<input type="submit" value="Submit"/>
// 			</div>
// 		)
// 	}
// }

export default MessageInput;
