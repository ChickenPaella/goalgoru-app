import React from 'react';
import MyNutritionStatus from '../components/MyNutritionStatus';
import BadgeHistory from '../components/BadgeHistory';
import Validate from '../components/Validate';
import { connect } from 'react-redux';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';
import { prevMonth, nextMonth } from '../actions/MyPageAction';
import { getBadgeHistory } from '../modules/ApiModule';

class MyPageContainer extends React.Component {
    constructor(args) {
        super(args);

        this.state = {
          "carbo":0,
          "protein":0,
          "fat":0,
          "history":[]
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.props.onChangeTitle("나의 상태");
        this.props.setActionBarBase();

        this.getData();
    }

    getData() {
        getBadgeHistory(this.props.year, this.props.month, (data) => {
            this.setState({
              "carbo": data.nutri_count.carbo,
              "protein": data.nutri_count.protein,
              "fat": data.nutri_count.fat,
              "history": data.ate_list
            });
        });
    }

    render() {
        let style = {
          paddingTop: "50px",
          backgroundColor: "#5836c9"
        };

        return (
          <div style={style}>
            <MyNutritionStatus
              year={this.props.year}
              month={this.props.month}
              protein={this.state.protein}
              fat={this.state.fat}
              carbo={this.state.carbo}
              onPrevMonth={() => this.props.onPrevMonth()}
              onNextMonth={() => this.props.onNextMonth()}
            />
            <BadgeHistory history={this.state.history} />
          </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        year: state.mypage.year,
        month: state.mypage.month
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        setActionBarBase: () => {
          dispatch(setActionBarBase());
        },
        onPrevMonth: () => {
            dispatch(prevMonth());
        },
        onNextMonth: () => {
            dispatch(nextMonth());
        }
    };
};

MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPageContainer);

export default MyPageContainer;
