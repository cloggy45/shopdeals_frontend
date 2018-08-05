import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as authActions from '../actions/auth';
import * as AuthService from '../services/auth';

class Header extends Component {
   handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); 
    this.props.history.push({ pathname: '/' });
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        <ul className="list-inline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {auth.isAuthenticated ? (
          <React.Fragment>
            <img src={auth.profile.picture} height="40px" alt="profile" />
            <span>Welcome, {auth.profile.nickname}</span>
            <button onClick={this.handleLogoutClick}>Logout</button>
          </React.Fragment>
        ) : (
          <button onClick={this.handleLoginClick}>Login</button>
        )}
        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth : state["AUTH"] 
  }
};

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(authActions.loginRequest()),
  logoutSuccess: () => dispatch(authActions.logoutSuccess())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);