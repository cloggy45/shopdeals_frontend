import React, {
  Component
} from "react";

import {
  Switch,
  Route
} from 'react-router-dom';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as authActions from '../actions/auth';

import Header from "./Header/AppBar";
import * as AuthService from '../services/auth';

class App extends Component {

  componentWillMount() {
    const {
      history,
      loginError,
      loginSuccess
    } = this.props;
    AuthService.lock.on('authenticated', authResult => {
      AuthService.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return loginError(error);
        }
        AuthService.setToken(authResult.idToken); 
        AuthService.setProfile(profile); 
        
        loginSuccess(profile);
        history.push({
          pathname: '/'
        });
        AuthService.lock.hide();
      });
    });
    AuthService.lock.on('authorization_error', error => {
      loginError(error);
      history.push({
        pathname: '/'
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route exact path="/logout" render={() => <h1>Logout</h1>} />
          <Route exact path="/account" render={() => <h1>Account</h1>} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
  loginError: error => dispatch(authActions.loginError(error))
});

export default withRouter(
  connect(
    null, 
    mapDispatchToProps
  )(App)
);

