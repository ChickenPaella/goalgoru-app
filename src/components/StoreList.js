import React from "react";
import StoreItem from "./StoreItem";

class StoreList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      let style = {
        "textAlign": "center"
      };

      return (
        <div style={style}>
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </div>
      );
    }
}

export default StoreList;
