import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';

import * as authActions from '../../actions/auth';

import HeaderBar, {styles} from './AppBarView';


const mapStateToProps = state => {
    return {
        auth: state["AUTH"]
    }
};

const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(authActions.loginRequest()),
    logoutSuccess: () => dispatch(authActions.logoutSuccess())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderBar)));