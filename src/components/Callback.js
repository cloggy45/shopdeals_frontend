import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Callback = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <CircularProgress className={classes.progress} size={50} />
    </React.Fragment>
  );
}

Callback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Callback);