import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionHandlers from './../actions/actionHandlers';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionHandlers, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;