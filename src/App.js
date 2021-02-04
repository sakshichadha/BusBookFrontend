import React, { Fragment, useEffect } from "react";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";
import Alert from "./containers/alert";
import Dashboard from "./containers/dashboard/dashboard";
import Viewbuses_cus from "./containers/ViewBusesCustomer";
import Addbus from "./containers/AddBus";
import Showbus from "./containers/Showbus";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Buses from "./containers/buses/Buses";

import Bus from "./containers/Bus";
// import ResetBus from "./containers/ResetBus";
import Seats from "./components/ViewSeats";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Buses" component={Buses} />
              {/* <Route exact path="/tickets" component={Tickets} /> */}
              <Route exact path="/api/users/bus/:id" component={Bus} />

              <Route exact path="/api/users/seats" component={Seats} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/addbus" component={Addbus} />
              <PrivateRoute exact path="/getallbuses" component={Buses} />
              <PrivateRoute exact path="/showbus" component={Showbus} />
              <PrivateRoute
                exact
                path="/viewbuses_cus"
                component={Viewbuses_cus}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
