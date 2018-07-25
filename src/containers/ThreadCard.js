import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classnames from "classnames";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ThreadMenu from "./ThreadMenu";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  button: {
    margin: theme.spacing.unit
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ThreadCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, title, content, time_created } = this.props;
    return (
      <>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="Thread" className={classes.avatar}>
                D
              </Avatar>
            }
            action={
              <IconButton>
                <ThreadMenu />
              </IconButton>
            }
            title={title}
            subheader={time_created}
          />
          <CardMedia
            className={classes.media}
            image="http://via.placeholder.com/100x150"
            title="placeholder"
          />
          <CardActions>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Get Deal
            </Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                {content}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </>
    );
  }
}

ThreadCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ThreadCard);
