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
        "position": "relative",
        "backgroundColor": "#6C3AC0",
        "backgroundImage": "url('../assets/images/bg_store.png')",
        "backgroundSize": "contain",
        "backgroundPosition": "right top",
        "backgroundRepeat": "no-repeat",
        "height": "150px",
        "color": "#FFFFFF"
      };

      let titleStyle = {
        "fontStyle": "italic",
        "position": "absolute",
        "height": "3em",
        "top": "-1.5em",
        "bottom": "0px",
        "left": "20px",
        "margin": "auto"
      };

      let starBoldStyle = {
        "fontWeight": "bold",
        "color": "#FFF833"
      };

      let bigTextStyle = {
        "fontSize": "1.5em"
      };

      let starStyle = {
        "position": "absolute",
        "bottom": "55px",
        "right": "57px",
        "color": "#FC4356",
        "width": "50px",
        "fontSize": "1.5em",
        "textAlign": "center"
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
