import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class RewardContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("포인트몰");
    }
    render() {
        return <h1>Reward</h1>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        }
    };
};

RewardContainer = connect(undefined, mapDispatchToProps)(RewardContainer);

export default RewardContainer;
