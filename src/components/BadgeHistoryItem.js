import React from "react";
import { Link } from 'react-router';

class BadgeHistoryItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let style = {
          borderStyle: "solid",
          borderWidth: "1px 0px 0px",
          borderColor: "#dfdfdf",
          padding: "20px",
          position: "relative"
        };

        let titleStyle = {
          display: "block"
        };

        let descStyle = {
          display: "block",
          fontSize: "0.8em",
          boxSizing: "border-box",
          paddingRight: "100px",
          height: "1em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };

        let badgeStyle = {
          position: "absolute",
          right: "20px",
          top: "20px",
          lineHeight: "2em",
          fontSize: "1em",
          color: "#AAAAAA",
          textDecoration: "none"
        };

        let buttonStyle = Object.assign({}, badgeStyle, {color: "#FF4955"})

        const getHistoryDate = () => {
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
          <li style={style}>
            <span style={titleStyle}>{this.props.menuName}</span>
            <span style={descStyle}>{getHistoryDate()} | {this.props.storeName}</span>
            {
              (this.props.isValidated) ?
              <span style={badgeStyle}>{this.props.badgeType}</span> :
              <Link to={"validate"} style={buttonStyle}>+ 인증하기</Link>
            }
          </li>
        );
    }
}

BadgeHistoryItem.defaultProps = {
  "menuId": "0",
  "menuName": "",
  "storeId": "0",
  "storeName": "",
  "date": 0,
  "isValidated": false,
  "badgeType": ""
};

export default BadgeHistoryItem;
