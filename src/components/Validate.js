import React from "react";
import FontAwesome from "react-fontawesome";
import InputForm from "./InputForm";

class Validate extends React.Component {
    constructor(props, context) {
        super(props, context);
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

      const getDate = () => {
        let tmpDate = new Date(this.props.date);
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
          <InputForm name="store" title="식사한 식당" width="48%" value={this.props.store.name} readOnly={true} />
          <InputForm name="date" title="일자" width="49%" value={getDate()} readOnly={true}/>
          <InputForm name="menu" title="음식명" width="100%" value={this.props.menu.name} readOnly={true}/>
          <InputForm name="authCode" title="영수증 번호" width="100%" />

          <button style={buttonStyle}>제출하고 뱃지 받기</button>
        </div>
      );
    }
}

Validate.defaultProps = {
  'menu': {'id': '', 'name': ''},
  'store': {'id': '', 'name': ''},
  'date': 0
};

export default Validate;
