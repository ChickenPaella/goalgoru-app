import React from "react";

class StarStat extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "star": "15",
          "user": {
            "id": "001",
            "name": "김유빈"
          }
        };
    }

    render() {
      let style = {
        "backgroundColor": "#583DC6",
        "color": "#FFFFFF"
      };

      let titleStyle = {
        "fontStyle": "italic"
      };

      let starBoldStyle = {
        "fontWeight": "bold",
        "color": "#FFF833"
      };

      let bigTextStyle = {
        "textSize": "1.2em"
      };

      let starStyle = {
        "color": "#FC4356"
      };

      return (
        <div style={style}>
          <div style={titleStyle}>
            {this.state.user.name}님의 <span style={starBoldStyle}>별 {this.state.star}개</span>로<br />
            <span style={bigTextStyle}>맛있는 간식을!</span>
          </div>
          <div style={starStyle}>{this.state.star}</div>
        </div>
      );
    }
}

export default StarStat;
