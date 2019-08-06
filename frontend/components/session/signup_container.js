import { connect } from 'react-redux';
import { signup, resetErrors } from '../../actions/session_actions';
import Signup from './signup';
import { withRouter } from 'react-router'

// we don't need to msp because ...
// setup doesn't rely on any part of state, EXCEPT FOR MAYBE ERRORS?!

const msp = state => ({
    errors: state.errors
})

const mdp = dispatch => {
    return ({
    createUser: user => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())
})};

export default withRouter(connect(msp, mdp)(Signup));