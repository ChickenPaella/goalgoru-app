import React from "react";

class StoreItem extends React.Component {
  constructor(props, context) {
      super(props, context);
  }

  render() {
    let style = {
      "display": "inline-block",
      "width": "150px",
      "margin": "5px",
      "backgroundColor": "#FFFFFF"
    };

    let imageStyle = {
      "display": "inline-block",
      "backgroundImage": "",
      "backgroundSize": "cover",
      "width": "100%",
      "height": "100px"
    };

    let descStyle = {

    };

    let purchasedStyle = {

    };

    return (
      <div style={style}>
        <span style={purchasedStyle}>결제완료</span>
        <span style={imageStyle}></span>
        <span>[{this.props.store.name}] {this.props.menu.name}</span>
        <span><span style={{"color": "#FF0000"}}>★</span> {this.props.price}</span>
        <button>구매하기</button>
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
