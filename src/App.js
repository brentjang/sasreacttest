import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Marketing from "./Pages/Marketing";
import RidemMaintenance from "./Pages/RideMaintenance";
import Overview from "./Pages/Overview";
import Tickets from "./Pages/Tickets";
import Login from "./Pages/Login";
import Messages from "./Pages/Messages";
import Finances from "./Pages/Finances";
import BuyData from "./Pages/BuyData";
import Inbox from "./Pages/Inbox";
import Map from "./Pages/Map";
import BuyRides from "./Pages/BuyRides";

import { UserContext } from "./Context/UserContext";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";

import "./App.css";

class App extends Component {
  state = {
    currentUser: {
      email: null,
      teamID: null,
      isManager: null,
      budget: null,
    },
  };
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <ToastContainer />
          <Switch>
            <Route path="/marketing" component={Marketing} />
            <Route path="/rideMaintenance" component={RidemMaintenance} />
            <Route path="/buyRide" component={BuyRides} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/overview" component={Overview} />
            <Route path="/messages" component={Messages} />
            <Route path="/finances" component={Finances} />
            <Route path="/buydata" component={BuyData} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/map" component={Map} />
            <Route path="/" exact component={Login} />
          </Switch>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
