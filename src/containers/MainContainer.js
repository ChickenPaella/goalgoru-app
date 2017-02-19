import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("고루고루");
    }

    render() {
        return <div>
            <h1>Main</h1>
        </div>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        }
    };
};

MainContainer = connect(undefined, mapDispatchToProps)(MainContainer);

export default MainContainer;
