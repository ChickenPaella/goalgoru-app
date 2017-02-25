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
        let style = {
          paddingTop: "50px",
          backgroundColor: "#6C3AC0"
        };

        return(
          <div style={style}>
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
