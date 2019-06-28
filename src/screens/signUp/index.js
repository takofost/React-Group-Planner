import React, { Component } from 'react';
import {Link} from "react-router-dom";
import  axios from "axios";
import {LocalAddress} from "../../config/index";
class signUp extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
         apiget:null,
         alert:null
      }
    }

    signUp=(event)=>{
        event.preventDefault();
        if(this.refs.name.value==this.refs.name1.value){

            axios.post(LocalAddress+'/api/login', {
               email: this.refs.email.value,
               name:this.refs.name.value,
              })
                .then((response) => {
                    if(response.data.data){
                        console.log('',response.data.data)
                    }else{
                        axios.post(LocalAddress+'/api/add', {
                            name: this.refs.name.value,
                            email: this.refs.email.value
                          })
                            .then((response) => {
                           //   console.log(response.data.data);
                              this.setState({apiget:response.data.data})
                              localStorage.setItem('name', response.data.data.name);
                           })
                            .catch(function (error) {
                              console.log(error);
                            }.bind(this));
                    }
               })
                .catch(function (error) {
                }.bind(this));

           
        }
       
       if(this.state.apiget==null){
          document.getElementById('note').innerHTML="Password not Match  this Email use before"
       }
    }
    render() {
        if(this.state.apiget==null || this.state.apiget==undefined ){
           
        }else{
            this.props.history.push('/layout');
        }
        return(
            <section class="bg">
            <div>
                <h1 class="name"> CHAT SYSTEM </h1>
                <div class="frm">
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control tr"  ref="email" name="email" id="email" placeholder="Enter Your Email" required />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control tr" ref="name" name="password" id="password" placeholder="Enter Your Password" required />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control tr" ref="name1" name="password" id="password" placeholder="Enter Your Confirm Password" required />
                        <p id="note"></p>
                    </div>
                </form>
            </div>
        </div>
        <div class="buts">
        <input type="submit" className="btn btn-default ml-5" value="Sign" onClick={this.signUp}/>
        </div>
        
    </section>
        );
    }
}
export default signUp;