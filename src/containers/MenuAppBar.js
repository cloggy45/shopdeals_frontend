import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { isUserAuthenticated } from "../reducers/rootReducer";


const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  button: {
    color: "white",
    borderColor: "white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { userAuthenticated } = this.props;
    let menu;
    if (!userAuthenticated) {
      menu = (
        <Button variant="outlined" className={classes.button}>
          Sign Up
        </Button>
      );
    } else {
      menu = (
        <React.Fragment>
          <IconButton
            aria-owns={open ? "menu-appbar" : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}><Link to="/profile">Profile</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/settings">Settings</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/logout">Logout</Link></MenuItem>
          </Menu>
        </React.Fragment>
      );
    }
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Shop Deals
            </Typography>
            {menu}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userAuthenticated: isUserAuthenticated(state)
  }
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(MenuAppBar)));
