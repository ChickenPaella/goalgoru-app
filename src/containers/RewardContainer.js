import React from 'react';
import StarStat from '../components/StarStat';
import StoreList from '../components/StoreList';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class RewardContainer extends React.Component {
  componentDidMount() {
      this.props.onChangeTitle("포인트몰");
  }

  render() {
    let style = {
      "marginTop": "50px",
      "backgroundColor": "#EFEFEF"
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
