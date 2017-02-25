import React from "react";

class StoreItem extends React.Component {
  constructor(props, context) {
      super(props, context);
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
      "backgroundImage": "url('http://img.kookmincoupon.com/upload/company_images/i1748514096497562605.jpg')",
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

    return (
      <div style={style}>
        <span style={purchasedStyle}>결제완료</span>
        <span style={imageStyle}></span>
        <span style={descStyle}>[{this.props.store.name}] {this.props.menu.name}</span>
        <span style={starStyle}><span style={{"color": "#FC4356"}}>★</span> {this.props.price}</span>
        <button style={buttonStyle}>구매하기</button>
      </div>
    );
  }
}

StoreItem.defaultProps = {
  'store': {'id': '', 'name': '국대'},
  'menu': {'id': '', 'name': '떡볶이 1인분', 'image': ''},
  'price': 2
};

export default StoreItem;
