import React from 'react';
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
}

export default RewardContainer;
