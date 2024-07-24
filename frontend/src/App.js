import React, { Component } from "react";
import Root from "./Root"; // <------------- new import
import { Route, Routes } from "react-router-dom"; // <--- remove BrowserRouter
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Root> {/* replace BrowserRouter with Root */}
          <Routes>
            <Route path="/signup" component={<Signup />} />
            <Route path="/login" component={<Login />} />
            <Route path="/dashboard" component={<Dashboard />} />
            <Route path="/" component={<Home />} />
            <Route path="*">Ups</Route>
          </Routes>
        </Root> {/* replace BrowserRouter with Root */}
      </div>
    );
  }
}

export default App;
