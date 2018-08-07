import React, {Component} from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import * as AuthService from "../../services/auth";

export const styles = {
    link : {
        textDecoration: 'none'
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatar: {
        margin: 10,
    },
};

class HeaderBar extends Component {
    state = {
        open: false
    };

    handleLoginClick = () => {
        AuthService.login();
        this.props.loginRequest();
    };

    handleLogoutClick = () => {
        this.props.logoutSuccess();
        AuthService.logout();
        this.props.history.push({pathname: '/'});
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render() {
        const {auth, classes} = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={open ? 'menu-list-grow' : null}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                        >
                            <MenuIcon color={"inherit"}/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Shop Deals
                        </Typography>
                        {auth.isAuthenticated ? (
                            <React.Fragment>
                                <Avatar src={auth.profile.picture} height="40px" alt="profile" className={classes.avatar}/>
                                <Typography color={"inherit"}> Welcome, {auth.profile.nickname}</Typography>
                            </React.Fragment>
                        ) : (
                            <Button color="inherit" onClick={this.handleLoginClick}>Login</Button>
                        )}
                        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
                    </Toolbar>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose}><NavLink to={"/deals"} className={classes.link}>Deals</NavLink></MenuItem>
                                            <MenuItem onClick={this.handleClose}><NavLink to={"/freebies"} className={classes.link}>Freebies</NavLink></MenuItem>
                                            {
                                                auth.isAuthenticated ? (
                                                    <React.Fragment>
                                                        <Divider/>
                                                        <MenuItem onClick={this.handleClose}><NavLink to={"/profile"} className={classes.link}>Profile</NavLink></MenuItem>
                                                        <MenuItem onClick={this.handleClose}><NavLink to={"/account"} className={classes.link}> Account Settings</NavLink></MenuItem>
                                                        <MenuItem onClick={this.handleLogoutClick}><NavLink to={"/logout"} className={classes.link}>Logout</NavLink></MenuItem>
                                                    </React.Fragment>
                                                ) : null
                                            }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </AppBar>
            </div>
        );
    }
}

export default HeaderBar;