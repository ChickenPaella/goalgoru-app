import React from "react";

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
      "position": "relative",
      "display": "inline-block",
      "width": "150px",
      "margin": "5px",
      "backgroundColor": "#FFFFFF"
    };

    let imageStyle = {
      "display": "inline-block",
      "backgroundImage": "url(' " + this.props.menuImage + "')",
      "backgroundSize": "cover",
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

    let disabledButtonStyle = Object.assign({}, buttonStyle, {"color": "#EFEFEF"});

    return (
      <div style={style}>
        <span style={purchasedStyle}>결제완료</span>
        <span style={imageStyle}></span>
        <span style={descStyle}>[{this.props.storeName}] {this.props.menuName}</span>
        <span style={starStyle}><span style={{"color": "#FC4356"}}>★</span> {this.props.price}</span>
        <button style={(this.state.star < this.props.price)?disabledButtonStyle:buttonStyle}
                >구매하기</button>
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

export default StoreItem;
