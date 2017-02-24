import React from "react";
import FontAwesome from "react-fontawesome";
import InputForm from "./InputForm";

class CardInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "cardNumber": "1111-2222-3333-4444"
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

      return (
        <div style={style}>
          <InputForm name="cardNumber" title="카드 번호" width="100%" value={this.state.cardNumber} />

          <button style={buttonStyle}>카드 번호 저장</button>
        </div>
      );
    }
}

export default CardInfo;
