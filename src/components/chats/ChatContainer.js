import React, { Component } from "react";
import {
  COMMUNITY_CHAT,
  MESSAGE_SENT,
  MESSAGE_RECIEVED,
  TYPING
} from "../Events";
import ChatHeading from "./ChatHeading";
import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      activeChat: null,
      ret:1,
    };
  }

  componentDidMount() {
    const { socket } = this.props;
    socket.emit(COMMUNITY_CHAT, this.resetChat);
  }

  getChatData=(data)=>{
   // debugger
    if(this.state.activeChat!==null){
      let activeChat=Object.assign([],this.state.activeChat,{
      messages:data
    });
   this.setState({activeChat})
    }else{
    return
  }
  
  
    
  }

  /*
   *	Reset the chat back to only the chat passed in.
   * 	@param chat {Chat}
   */
  resetChat = chat => {
    return this.addChat(chat, true);
  };

  /*
   *	Adds chat to the chat container, if reset is true removes all chats
   *	and sets that chat to the main chat.
   *	Sets the message and typing socket events for the chat.
   *
   *	@param chat {Chat} the chat to be added.
   *	@param reset {boolean} if true will set the chat as the only chat.
   */
  addChat = (chat, reset) => {
    const { socket } = this.props;
    const { chats } = this.state;

    const newChats = reset ? [chat] : [...chats, chat];
    this.setState({
      chats: newChats,
      activeChat: reset ? chat : this.state.activeChat
    });

    const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`;
    const typingEvent = `${TYPING}-${chat.id}`;

    socket.on(typingEvent, this.updateTypingInChat(chat.id));
    socket.on(messageEvent, this.addMessageToChat(chat.id));
  };

  /*
   * 	Returns a function that will
   *	adds message to chat with the chatId passed in.
   *
   * 	@param chatId {number}
   */
  addMessageToChat = chatId => {
    return message => {
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.id === chatId) chat.messages.push(message);
        return chat;
      });

      this.setState({ chats: newChats });
    };
  };

  /*
   *	Updates the typing of chat with id passed in.
   *	@param chatId {number}
   */
  updateTypingInChat = chatId => {
    return ({ isTyping, user }) => {
      if (user !== this.props.user.name) {
        const { chats } = this.state;

        let newChats = chats.map(chat => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter(u => u !== user);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  };

  /*
   *	Adds a message to the specified chat
   *	@param chatId {number}  The id of the chat to be added to.
   *	@param message {string} The message to be added to the chat.
   */
  sendMessage = (chatId, message) => {
    const { socket } = this.props;
    socket.emit(MESSAGE_SENT, { chatId, message });
   
    // this.setState({activeChat:""})
  };

  /*
   *	Sends typing status to server.
   *	chatId {number} the id of the chat being typed in.
   *	typing {boolean} If the user is typing still or not.
   */
  sendTyping = (chatId, isTyping) => {
    const { socket } = this.props;
    socket.emit(TYPING, { chatId, isTyping });
  };

  setActiveChat = activeChat => {
    this.setState({ activeChat });
  };
  render() {
  //  const user=localStorage.getItem('name');
    const { user, logout } = this.props;
    const { chats, activeChat } = this.state;
    // console.log("active chate",activeChat)
    return (
      <div className="">
        {/* <SideBar
					logout={logout}
					chats={chats}
					user={user}
					activeChat={activeChat}
					setActiveChat={this.setActiveChat}
					/> */}
        <div className="">
          {activeChat !== null ? (
            <div className="">
              <ChatHeading name={activeChat.name} />
              {/* <Messages
                messages={activeChat.messages}
                user={user}
                typingUsers={activeChat.typingUsers}
              /> */}
              <MessageInput
               getChatData={this.getChatData}
                sendMessage={message => {
                  this.sendMessage(activeChat.id, message);
                }}
                sendTyping={isTyping => {
                  this.sendTyping(activeChat.id, isTyping);
                }}
                messages={activeChat.messages}
                user={user}
                typingUsers={activeChat.typingUsers}
              />
            </div>
          ) : (
            <div className="">
              
            </div>
          )}
        </div>
      </div>
    );
  }
}
