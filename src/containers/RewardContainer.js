import React from 'react';
import StarStat from '../components/StarStat';
import StoreList from '../components/StoreList';

class RewardContainer extends React.Component {
    render() {
        return (
          <div>
            <StarStat />
            <StoreList />
          </div>
        );
    }
}

export default RewardContainer;
