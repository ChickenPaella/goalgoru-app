import React from "react";
import FontAwesome from "react-fontawesome";

class Validate extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      let style = {
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
          <div>
            <span>식사한 식당</span>
            <input type="text" value={this.props.store.name} />
          </div>
          <div>
            <span>일자</span>
            <input type="date" value={getDate()} />
          </div>
          <div>
            <span>음식명</span>
            <input type="text" value={this.props.menu.name} />
          </div>
          <div>
            <span>영수증 번호</span>
            <input type="text" />
          </div>
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
