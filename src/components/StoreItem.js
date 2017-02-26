import React from "react";
import { dimming, undimming } from "../actions/DimmerAction";
import { openConfirmPopup } from '../actions/ConfirmPopupAction';
import { connect } from "react-redux";

class StoreItem extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        "star": "15",
        "user": {
          "id": "001",
          "name": "김유빈"
        }
      }
  }

  render() {
    let style = {
    "float": "left",
      "position": "relative",
      "display": "inline-block",
      "width": "49%",
      "margin": "0.5%",
      "backgroundColor": "#FFFFFF"
    };

    let imageStyle = {
      "display": "inline-block",
      "backgroundImage": "url(' " + this.props.menuImage + "')",
      "backgroundSize": "contain",
      "backgroundPosition": "center center",
      "backgroundRepeat": "no-repeat",
      "width": "100%",
      "height": "120px"
    };

    let descStyle = {
      "height": "2em",
      "display": "block",
      "padding": "5px 5%",
      "overflow": "hidden",
      "textAlign": "left"
    };

    let purchasedStyle = {
      "position": "absolute",
      "top": "0px",
      "right": "0px",
      "fontSize": "0.8em",
      "padding": "5px",
      "backgroundColor": "#404040",
      "color": "#FFFFFF",
      "opacity": "0.7"
    };

    let starStyle = {
      "display": "block",
      "borderBottom": "1px solid #EFEFEF",
      "paddingBottom": "5px",
      "width": "90%",
      "marginLeft": "5%",
      "textAlign": "left"
    };

    let buttonStyle = {
      "border": "none",
      "backgroundColor": "#FFFFFF",
      "color": "#FC4356",
      "padding": "10px",
      "textAlign": "center",
      "width": "100%"
    };
    let innerStyle = {
        position: "relative",
        marginTop: "3%",
        marginLeft: "4%",
        marginRight: "2%"
    }
    if(this.props.index % 2 == 1) {
        innerStyle = Object.assign({}, innerStyle, {
            marginLeft: "2%",
            marginRight: "4%"
        })
    }

    let disabledButtonStyle = Object.assign({}, buttonStyle, {"color": "#EFEFEF"});

    return (
      <div style={style}>
        <div style={innerStyle}>
        <span style={purchasedStyle}>결제완료</span>
        <span style={imageStyle}></span>
        <span style={descStyle}>[{this.props.storeName}] {this.props.menuName}</span>
        <span style={starStyle}><span style={{"color": "#FC4356"}}>★</span> {this.props.price}</span>
        <button style={(this.state.star < this.props.price)?disabledButtonStyle:buttonStyle} onClick={() => {this.props.onBuy(this.props.menuName, "구매하시겠습니까?")}}>구매하기</button>
        </div>
      </div>
    );
  }
}

StoreItem.defaultProps = {
  'storeId': '',
  'storeName': '',
  'menuId': '',
  'menuName': '',
  'menuImage': 'http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg',
  'price': 2
};

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToPros = (dispatch) => {
    return {
        onBuy: (product, message) => {
            console.log(product, message);
            dispatch(dimming());
            dispatch(openConfirmPopup(product, message));
        },
        onUndimming: () => {
            dispatch(undimming());
        }
    }
}

StoreItem = connect(mapStateToProps, mapDispatchToPros)(StoreItem);

export default StoreItem;
