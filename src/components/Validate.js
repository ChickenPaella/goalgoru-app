import React from "react";
import FontAwesome from "react-fontawesome";
import InputForm from "./InputForm";
import { connect } from 'react-redux';
import { dimming, undimming } from '../actions/DimmerAction';
import { openValidate, closeValidate } from '../actions/MyPageAction';

class Validate extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "date": 0,
          "menu": {"id": "001", "name": "불고기 백반"},
          "store": {"id": "001", "name": "골고루식당"}
        };
    }

    render() {
      let style = {
        "textAlign": "justify"
      };

      let buttonStyle = {
        "position": "fixed",
        "left": "0px",
        "bottom": "0px",
        "width": "100%",
        "height": "3em",
        "border": "0px",
        "backgroundColor": "#6C3AC0",
        "color": "#FFFFFF"
      };

      let openedAlertStyle = {
      };

      let closedAlertStyle = {
        "display": "none"
      };

      const getDate = () => {
        let tmpDate = new Date(this.state.date);
        let tmpString = "";

        tmpString += tmpDate.getFullYear() + ".";
        tmpString += ((tmpDate.getMonth() < 9) ? "0" + (tmpDate.getMonth() + 1) : tmpDate.getMonth() + 1) + ".";
        tmpString += ((tmpDate.getDate() < 10) ? "0" + tmpDate.getDate()  : tmpDate.getDate()) + ".";

        tmpString += " ";

        switch(tmpDate.getDay()) {
          case 0:
            tmpString += "일요일";
            break;
          case 1:
            tmpString += "월요일";
            break;
          case 2:
            tmpString += "화요일";
            break;
          case 3:
            tmpString += "수요일";
            break;
          case 4:
            tmpString += "목요일";
            break;
          case 5:
            tmpString += "금요일";
            break;
          case 6:
            tmpString += "토요일";
            break;
        }

        return tmpString;
      };

      return (
        <div style={style}>
          <InputForm name="store" title="식사한 식당" width="48%" value={this.state.store.name} readOnly={true} />
          <InputForm name="date" title="일자" width="49%" value={getDate()} readOnly={true}/>
          <InputForm name="menu" title="음식명" width="100%" value={this.state.menu.name} readOnly={true}/>
          <InputForm name="authCode" title="영수증 번호" width="100%" />

          <button style={buttonStyle} onClick={this.props.onOpenValidate}>제출하고 뱃지 받기</button>

          <div style={this.props.alertVisible?{display: "block"}:{display: "none"}}>Hello</div>
        </div>
      );
    }
}

let mapStateToProps = (state) => {
    return {
        alertVisible: state.mypage.alertVisible
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onOpenValidate: () => {
            dispatch(dimming());
            dispatch(openValidate());
        }
    };
};

Validate = connect(mapStateToProps, mapDispatchToProps)(Validate);

export default Validate;
