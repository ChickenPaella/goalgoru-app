import React from 'react';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class CardInfoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onChangeTitle("내 카드 정보");
    }

    render() {
        return(
          <div>
            <CardInfo />
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

CardInfoContainer = connect(undefined, mapDispatchToProps)(CardInfoContainer);

export default CardInfoContainer;
