import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';

import * as authActions from '../../actions/auth';
import * as fromAuth from '../../reducers/rootReducer';

import HeaderBar, {styles} from './AppBarView';

const mapStateToProps = state => {
    return {
        isAuthenticated: fromAuth.isAuthenticated(state),
        authProfile: fromAuth.getAuthProfile(state),
        authError: fromAuth.getAuthError(state)
    }
};

const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(authActions.loginRequest()),
    logoutSuccess: () => dispatch(authActions.logoutSuccess())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderBar)));