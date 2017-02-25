import React from 'react';
import MyNutritionStatus from '../components/MyNutritionStatus';
import BadgeHistory from '../components/BadgeHistory';
import Validate from '../components/Validate';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class MyPageContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("나의 상태");
    }

    render() {
        let style = {
          "marginTop": "50px"
        };

        return (
          <div style={style}>
            <MyNutritionStatus />
            <BadgeHistory />
          </div>
        );
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
