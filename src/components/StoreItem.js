import React from "react";

class StoreItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      return (
        <div>
          <img src={this.props.image} />
          <span>[{this.props.store.name}] {this.props.menu.name}</span>
          <span>별 {this.props.price}</span>
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
