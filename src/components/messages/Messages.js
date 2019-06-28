import React, { Component } from 'react';

export default class Messages extends Component {
	constructor(props) {
	  super(props)
	  
	  this.state= {
		date:null,
		time:null,
		text:null
	  }
		//this.scrollDown = this.scrollDown.bind(this)
	}

	scrollDown=()=>{
		const { container1 } = this.refs
		container1.scrollTop = container1.scrollHeight
	}

	componentDidMount() {
		this.scrollDown()
	}

	componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}
	
	render() {
		const { messages, user, typingUsers } = this.props
	
		return (
			<div ref='container1'
				className="thread-container">
				<div className="thread">
					{
						messages.map((mes)=>{
						//	console.log(mes)
							return (
								<div
									key={mes.id}
									className={`message-container ${mes.sender === user.name && 'right'}`}
								>
									<div className="time">{mes.time}</div>
									<div className="data">
										<div className="message">{mes.message}</div>
										<div className="">{mes.sender}</div>
									</div>
								</div>

								)
						})
					}
					{
						typingUsers.map((name)=>{
							return (
								<div key={name} className="typing-user">
									{`${name} is typing . . .`}
								</div>
							)
						})
					}
				</div>


			</div>
		);
	}
}
