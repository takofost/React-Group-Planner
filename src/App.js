import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./screens/home";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import dashboard from "./screens/dashboard";
import Layout from './components/Layout'

class App extends Component {
  render() {
  return (
    <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn*" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/dashboard" component={dashboard} />
            <Route exact path="/layout" component={Layout} />
            {/* <Route exact path="/chat" component={Chat} /> */}
            
          </Switch>
    </BrowserRouter>

  );
}
}
export default App;
