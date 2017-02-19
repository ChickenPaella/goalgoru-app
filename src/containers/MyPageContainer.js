import React from 'react';
import MyNutritionStatus from '../components/MyNutritionStatus';
import BadgeHistory from '../components/BadgeHistory';

class MyPageContainer extends React.Component {
    render() {
        return (
          <div>
            <MyNutritionStatus />
            <BadgeHistory />
          </div>
        );
    }
}

export default MyPageContainer;
