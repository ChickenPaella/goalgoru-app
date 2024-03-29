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
          "date": 1488077437945,
          "menu": {"id": "001", "name": "비빔밥"},
          "store": {"id": "001", "name": "토마토 식당"},

          "gotBadge": "탄수화물"
        };
    }

    render() {
      let style = {
        "position": "relative",
        "textAlign": "justify",
        "padding": "40px 30px",
        "backgroundColor": "#FFFFFF",
        "width": "100%",
        "margin": "auto",
        "boxSizing": "border-box",
        "boxShadow": "rgba(0, 0, 0, 0.34902) 0px 10px 40px -14px"
      };

      let buttonStyle = {
        "position": "absolute",
        "left": "0px",
        "bottom": "0px",
        "width": "100%",
        "height": "3em",
        "border": "0px",
        "backgroundColor": "#fdf51e",
        "color": "#000000"
      };

      const alertStyle = {
        "zIndex": "1000",
        "width": "90%",
        "left": "50%",
        "marginLeft": "-45%",
        "top": "50%",
        "backgroundColor": "#FFFFFF",
        "display": "block",
        "position": "absolute",
        "boxSizing": "border-box",
        "padding": "10px",
        "borderRadius": "10px",
        "fontSize": "1em"
      };
      let openedValidateConfirmStyle = Object.assign({}, alertStyle, {"height": "200px", "marginTop": "-100px"});
      let openedBadgeAcquiredStyle = Object.assign({}, alertStyle, {"height": "300px", "marginTop": "-150px"});

      let cautionStyle = {
        "fontSize": "0.6em",
        "color": "#ff4052",
        "display": "block",
        "textAlign": "center",
        "fontStyle": "italic"
      };

      let alertDescStyle = {
        "display": "block",
        "textAlign": "center"
      };

      let alertButtonStyle = {
          "position": "absolute",
          "bottom": "0px",
          "width": "90%",
          "margin": "auto",
          "height": "3em",
          "lineHeight": "3em",
          "backgroundColor": "#FFFFFF",
          "color": "#000000",
          "border": "none",
          "borderTop": "1px solid #EFEFEF",
          "borderRadius": "0px 0px 10px 10px",
          "textDecoration": "none",
          "display": "inline-block",
          "textAlign": "center"
      };
      let positiveButtonStyle = Object.assign({}, alertButtonStyle, {
        "right": "5%",
        "width": "45%",
        "color": "#ff4052"
      });
      let negativeButtonStyle = Object.assign({}, alertButtonStyle, {
        "left": "5%",
        "width": "45%"
      });

      let badgeStyle = {
        "height": "50%",
        "display": "block",
        "margin": "24px auto"
      };

      const getDate = () => {
        let tmpDate = new Date(this.state.date);
        let tmpString = "";

        tmpString += tmpDate.getFullYear() + ".";
        tmpString += ((tmpDate.getMonth() < 9) ? "0" + (tmpDate.getMonth() + 1) : tmpDate.getMonth() + 1) + ".";
        tmpString += ((tmpDate.getDate() < 10) ? "0" + tmpDate.getDate()  : tmpDate.getDate()) + ".";

        return tmpString;
      };

      return (
        <div style={style}>
          <InputForm name="store" title="식사한 식당" width="55%" value={this.state.store.name} readOnly={true} bolder={true} />
          <InputForm name="date" title="일자" width="45%" value={getDate()} readOnly={true}/>
          <InputForm name="menu" title="음식명" width="100%" value={this.state.menu.name} readOnly={true} bolder={true} padding="20px" />
          <InputForm name="authCode" title="영수증 번호" width="100%" align="center" color="#6C3AC0" bolder={true} letterSpacing="0.2em" />

          <img src="../assets/images/cer_receipt.png" style={{"maxWidth": "100%", "marginBottom": "90px", "marginTop": "-10px"}} />

          <button style={buttonStyle} onClick={this.props.onOpenValidateConfirm}>제출하기</button>

          <div style={this.props.validateConfirmVisible?openedValidateConfirmStyle:{"display": "none"}}>
            <span style={cautionStyle}>확인해주세요!!</span>
            <p style={alertDescStyle}>
              실제 식사와 내용이 다를 경우<br />
              이용에 불편을 겪을 수 있습니다.
            </p>
            <p style={alertDescStyle}>
              올바른 정보인지 다시 한 번<br />
              확인해주세요.
            </p>
            <button style={negativeButtonStyle} onClick={this.props.onNegativeValidateConfirm}>취소</button>
            <button style={positiveButtonStyle} onClick={this.props.onPositiveValidateConfirm}>확인</button>
          </div>

          <div style={this.props.badgeAcquiredVisible?openedBadgeAcquiredStyle:{"display": "none"}}>
            <img style={badgeStyle} src="../assets/images/cer_ico01.png" />
            <span style={alertDescStyle}>
              {this.state.gotBadge} 영양소 1개를<br />
              획득하였습니다!
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
      onPositiveValidateConfirm: () => {
          dispatch(closeValidateConfirm());
          dispatch(openBadgeAcquired());
      },
      onNegativeValidateConfirm: () => {
          dispatch(closeValidateConfirm());
          dispatch(undimming());
      },
      onCloseBadgeAcquired: () => {
          dispatch(closeBadgeAcquired());
          dispatch(undimming());
      }
    };
};

Validate = connect(mapStateToProps, mapDispatchToProps)(Validate);

export default Validate;
