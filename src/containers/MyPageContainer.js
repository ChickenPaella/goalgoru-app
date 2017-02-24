import React from 'react';
import MyNutritionStatus from '../components/MyNutritionStatus';
import BadgeHistory from '../components/BadgeHistory';
import Validate from '../components/Validate';

class MyPageContainer extends React.Component {
    render() {
        return (
          <div>
            <MyNutritionStatus />
            <BadgeHistory />
            <Validate />
          </div>
        );
    }
}

export default MyPageContainer;
