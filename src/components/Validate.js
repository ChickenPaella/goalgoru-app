import React from "react";
import FontAwesome from "react-fontawesome";
import InputForm from "./InputForm";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dimming, undimming } from '../actions/DimmerAction';
import { openValidateConfirm, closeValidateConfirm,
         openBadgeAcquired, closeBadgeAcquired } from '../actions/MyPageAction';

class Validate extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "date": 0,
          "menu": {"id": "001", "name": "불고기 백반"},
          "store": {"id": "001", "name": "골고루식당"},

          "gotBadge": "단백질"
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
        "backgroundColor": "#5836c9",
        "color": "#FFFFFF"
      };

      const alertStyle = {
        "zIndex": "1000",
        "width": "70%",
        "left": "50%",
        "marginLeft": "-35%",
        "top": "50%",
        "backgroundColor": "#FFFFFF",
        "display": "block",
        "position": "absolute",
        "boxSizing": "border-box",
        "padding": "10px",
        "borderRadius": "10px"
      };

      let openedValidateConfirmStyle = Object.assign({}, alertStyle, {"height": "200px", "marginTop": "-100px"});

      let openedBadgeAcquiredStyle = Object.assign({}, alertStyle, {"height": "400px", "marginTop": "-200px"});

      let alertTitleStyle = {
        "display": "block",
        "width": "100%",
        "fontSize": "1.2em",
        "fontWeight": "bold",
        "marginBottom": "10px",
        "textAlign": "center"
      };

      let alertDescStyle = {

      };

      let alertButtonStyle = {
        "position": "absolute",
        "left": "0px",
        "bottom": "0px",
        "width": "100%",
        "height": "3em",
        "lineHeight": "3em",
        "backgroundColor": "#5836c9",
        "color": "#FFFFFF",
        "border": "0px",
        "borderRadius": "0px 0px 10px 10px",
        "textDecoration": "none",
        "display": "inline-block",
        "textAlign": "center"
      };

      let badgeStyle = {
        "width": "80%",
        "display": "block",
        "margin": "auto",
        "marginBottom": "10px"
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

          <button style={buttonStyle} onClick={this.props.onOpenValidateConfirm}>제출하고 뱃지 받기</button>

          <div style={this.props.validateConfirmVisible?openedValidateConfirmStyle:{"display": "none"}}>
            <span style={alertTitleStyle}>뱃지를 받기 전에!</span>
            <span style={alertDescStyle}>실제 식사와 내용이 다를 경우 이용에 불편을 겪을 수 있습니다.<br />
            올바른 정보인지 다시 한 번 확인해주세요.</span>
            <button style={alertButtonStyle} onClick={this.props.onCloseValidateConfirm}>확인</button>
          </div>

          <div style={this.props.badgeAcquiredVisible?openedBadgeAcquiredStyle:{"display": "none"}}>
            <span style={alertTitleStyle}>뱃지 획득!</span>
            <img style={badgeStyle} src="//placehold.it/200x200?text=갓뱃지" />
            <span style={alertDescStyle}>
              {this.state.gotBadge} 뱃지를 받았습니다.<br />
              골고루 뱃지를 모으시면 별을 획득할 수 있습니다.
            </span>
            <Link to={"my"} style={alertButtonStyle} onClick={this.props.onCloseBadgeAcquired}>확인</Link>
          </div>
        </div>
      );
    }
}

let mapStateToProps = (state) => {
    return {
        validateConfirmVisible: state.mypage.validateConfirmVisible,
        badgeAcquiredVisible: state.mypage.badgeAcquiredVisible
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
      onOpenValidateConfirm: () => {
          dispatch(dimming());
          dispatch(openValidateConfirm());
      },
      onCloseValidateConfirm: () => {
          dispatch(closeValidateConfirm());
          dispatch(openBadgeAcquired());
      },
      onCloseBadgeAcquired: () => {
          dispatch(closeBadgeAcquired());
          dispatch(undimming());
      }
    };
};

Validate = connect(mapStateToProps, mapDispatchToProps)(Validate);

export default Validate;
