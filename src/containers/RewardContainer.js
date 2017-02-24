import React from 'react';
<<<<<<< HEAD
import StarStat from '../components/StarStat';
import StoreList from '../components/StoreList';

class RewardContainer extends React.Component {
  render() {
    let style = {
      "backgroundColor": "#EFEFEF"
    };

    return (
      <div style={style}>
        <StarStat />
        <StoreList />
      </div>
    );
  }
=======
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class RewardContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("포인트몰");
    }
    render() {
        return <h1>Reward</h1>
    }
>>>>>>> master
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
