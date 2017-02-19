import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class MyPageContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("나의 상태");
    }
    render() {
        return <div>
            <h1>MyPage</h1>
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

MyPageContainer = connect(undefined, mapDispatchToProps)(MyPageContainer);

export default MyPageContainer;
