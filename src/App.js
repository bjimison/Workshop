import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/homepage"
            exact
            render={props => <HomepageContainer {...props} />}
          />
          <Route />
          <Route />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     state: state.authReducer,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ stillLoggedIn }, dispatch);
// };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
