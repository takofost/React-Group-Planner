import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import $  from "jquery";
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        days:null,
        hours:null,
        overallTime:"",
            }
    }


    componentDidMount() {
        var countDownDate = new Date("Jul 15, 2019 15:37:25").getTime();
        let x=setInterval(()=>{
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({overallTime:days + "d " + hours + "h " + minutes + "m " + seconds + "s "});
            if (distance < 0) {
         clearInterval(x);
         this.setState({overallTime:"EXPIRED"})
                         }
      })
    }
    render() {
        return(
            <section>
               <p id="countDown" class="timer1">{this.state.overallTime}</p>
          
            </section>
        )
    }
}
export default Timer;