import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MoreVertIcon from "@material-ui/icons/MoreVert";

class ThreadMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <MoreVertIcon
          aria-owns={anchorEl ? "thread-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        />

        <Menu
          id="thread-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Hide</MenuItem>
          <MenuItem onClick={this.handleClose}>Report</MenuItem>
        </Menu>
        </React.Fragment>
    );
  }
}

export default ThreadMenu;
