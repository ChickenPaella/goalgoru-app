import React from 'react';
import StarStat from '../components/StarStat';
import StoreList from '../components/StoreList';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class RewardContainer extends React.Component {
  componentDidMount() {
      this.props.onChangeTitle("별별스토어");
  }

  render() {
    let style = {
      "paddingTop": "50px",
      "backgroundColor": "#5836c9"
    };

    return (
      <div style={style}>
        <StarStat />
        <StoreList />
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

RewardContainer = connect(undefined, mapDispatchToProps)(RewardContainer);

export default RewardContainer;
