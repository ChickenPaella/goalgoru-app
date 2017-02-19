import React from "react";

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
          display: "block",
          fontWeight: "bold"
        };

        let descStyle = {
          display: "block"
        };

        let badgeStyle = {
          position: "absolute",
          right: "20px",
          top: "20px",
          height: "2em"
        };

        const getHistoryDate = () => {
          let tmpDate = new Date(this.props.date);
          let tmpString = "";

          tmpString += tmpDate.getFullYear() + ".";
          tmpString += ((tmpDate.getMonth() < 9) ? "0" + tmpDate.getMonth() : tmpDate.getMonth() + 1) + ".";
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
            <span style={titleStyle}>{this.props.menu.name}</span>
            <span style={descStyle}>{getHistoryDate()} | {this.props.store.name}</span>
            {
              (this.props.isValidated)
              ?<img style={badgeStyle} src="//placehold.it/30x30?text=뱃지" />
              :<button style={badgeStyle}>인증하기</button>
            }
          </li>
        );
    }
}

BadgeHistoryItem.propTypes = {
    menu: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
    date: React.PropTypes.number.isRequired,
    isValidated: React.PropTypes.bool
};

export default BadgeHistoryItem;
