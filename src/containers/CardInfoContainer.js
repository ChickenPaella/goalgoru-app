import React from 'react';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';

class CardInfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          "height": props.height
        };
    }

    componentDidMount() {
        this.props.onChangeTitle("내 카드 정보");
        this.props.setActionBarBase();

        this.setState({height:window.innerHeight});
    }

    render() {
        let style = {
          paddingTop: "50px",
          backgroundColor: "#6C3AC0",
          minHeight: this.state.height,
          boxSizing: "border-box"
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
        },
        setActionBarBase: () => {
          dispatch(setActionBarBase());
        }
    };
};

CardInfoContainer = connect(undefined, mapDispatchToProps)(CardInfoContainer);

export default CardInfoContainer;
