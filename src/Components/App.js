import Main from './Main'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import * as actions from '../redux/actions';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

// connect does not modifying component class
// Instead, it is returning a new connected component
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // App is a connected component, connected to a redux store

export default App;