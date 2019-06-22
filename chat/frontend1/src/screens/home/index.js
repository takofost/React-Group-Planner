import React, { Component } from 'react';
 import {Link} from "react-router-dom";
import Timer from './timer'

// import $  from "jquery";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
      }
    }
signIN=(event)=>{
    event.preventDefault();
    this.props.history.push('/signIn');
}
            

    render() {

        return(
            <section class="bg">
            <div>
                <h1 class="name"> CHAT SYSTEM </h1>
               <Timer/>
            </div>
            <div class="buts">
            {/* <input type="submit" className="btn btn-default ml-5" value="Sign" onClick={this.signIN}/> */}
            <a href="/signIn" className="btn btn-default ml-5">Sign In</a>
                <a href="/signUp" className="btn btn-default ml-5">Sign Up</a>
              
            </div>
            
    </section>
        )
    }
}
export default Home;