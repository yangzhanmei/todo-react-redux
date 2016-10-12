import {connect} from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
    console.log(state.todos);
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        display: () => dispatch({type: 'DISPLAY', todo: 5})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);