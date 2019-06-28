import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from './Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
import  axios from "axios";
import $ from 'jquery'
import {LocalAddress} from "../config/index";

const socketUrl = LocalAddress;
export default class Layout extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	socket:null,
	  	user:null
	  };
	}

	componentWillMount() {
		this.initSocket()

		
		
	}
	componentDidMount(){
		$('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
        $('#sidebarCollapse1').on('click', function () {
            $('#sidebar').toggleClass('active');
		});
		//this.setState({user:localStorage.getItem('name')});
	}
 /*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			//console.log("Connected");
		})
		this.setState({socket})
	}

	/*
	* 	Sets the user property in state 
	*	@param user {id:number, name:string}
	*/	
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}

	/*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})

	}


	render() {
		const { title } = this.props
		
		const { socket, user} = this.state
	//	var x=localStorage.getItem('name')
		//console.log(user,"ghfghfghghgh");
		return (
			<div className="">
				{
				
					!user ?	
				
					<LoginForm socket={socket} setUser={this.setUser} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}
