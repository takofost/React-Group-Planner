import React, { Component } from 'react';
import $  from "jquery";

class dashboard extends Component 
{
  
      componentDidMount() {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
        $('#sidebarCollapse1').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    }
    
 
    render() {
        return(
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
                                <p className="text-center color-text">
                                    Miami Trip
                                </p>
                                <p className="text-center color-text">
                                    Friday Night Dinner
                                </p>
                                <p className="text-center color-text">
                                    Wedding 2020
                                </p>
                                <p className="text-center color-text">
                                    4th of July BBQ
                                </p>
                                <p className="text-center color-text">
                                    Beach Weekend
                                </p>
                                <p className="text-center color-text">
                                    Bachelor Party
                                </p>
                            </div>
                        </ul>  
                    </nav>
                    <div id="content">
                        <div className="row">
                            <div className="col-1">
                                <button type="button" id="sidebarCollapse1" className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                </button>
                            </div>
                            <div className="col-5">
                                <p id="countDown" className="timer1"></p>
                                <h3 className="txt"> - TO MIAMI. FL</h3>
                                <img src="assets/images/sun.png" className="sun" alt="sun" />
                                <div className="mssg">
                                </div>
                                <div className="mssg1">
                                </div>
                                <div className="mssg2">
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="group_div mt-1">
                                    <p className="spc"></p>
                                    <div className="group_chat_name">
                                        <p className="pt-3 blk">
                                            (Group Chat Name)
                                        </p>
                                    </div>
                                    <div className="gr_div">
                                        
                                    </div>
                                    <div className="group_chat_name">
                                        <input type="text" className="msg"/>
                 
                                        <img src="assets/images/msg_icon.png" alt="msgicon" />
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
    </section>
        );
    }
}
export default dashboard;