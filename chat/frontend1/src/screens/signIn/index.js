import React, { Component } from 'react';
import {Link} from "react-router-dom";
import  axios from "axios";
class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
         apiget:null,
         alert:null
      }
    }
    componentDidMount(){
   
    }
login=(event)=>{
          event.preventDefault();
          axios.post('http://localhost:2000/api/login', {
          name: this.refs.name.value,
          email: this.refs.email.value
        })
          .then((response) => {
         //   console.log(response.data.data);
            this.setState({apiget:response.data.data})
         })
          .catch(function (error) {
            console.log(error);
          }.bind(this));
         if(this.state.apiget==null){
            document.getElementById('note').innerHTML="Please Enter True Password"
         }
         
}


    render() {
        if(this.state.apiget==null || this.state.apiget==undefined ){
          }else{
            this.props.history.push('/layout');
          }
        return(
            <section className="bg">
                <h1 class="name"> CHAT SYSTEM </h1>
                <div className="frm">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control tr" ref="email" name="email" id="email" placeholder="Enter Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control tr" ref="name" name="password" id="password" placeholder="Enter Your Password" />
                        <p id="note"></p>
                        </div>
                    </form>
                </div>
                <div className="buts">
                    <input type="submit" className="btn btn-default ml-5" value="SignIn" onClick={this.login}/>
                    <Link to="/signUp" className="btn btn-default ml-5">Sign Up</Link>
                </div>
            </section>
        )
    }
}
export default signIn;