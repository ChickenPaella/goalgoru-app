import React from 'react';
import FontAwesome from 'react-fontawesome';

class MyNutritionStatus extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          year: 2017,
          month: 2,
          week: 3
        };
    }

    render() {
        let style = {
          textAlign: "center",
          position: "relative",
          padding: "20px 40px"
        };

        let titleStyle = {
          display: "block",
          fontWeight: "bold"
        };

        let descStyle = {
          display: "block",
          marginTop: "10px",
          fontSize: "0.7em"
        };

        let navButtonStyle = {
          position: "absolute",
          display: "block",
          top: "50%",
          width: "100%",
          fontSize: "30px",
          marginTop: "-10px"
        };

        let prevButtonWrapStyle = {
          position: "absolute",
          textAlign: "center",
          height: "100%",
          width: "40px",
          top: "0px",
          left: "0px"
        };

        let nextButtonWrapStyle = {
          position: "absolute",
          textAlign: "center",
          height: "100%",
          width: "40px",
          top: "0px",
          right: "0px"
        };

        return (
          <div style={style}>
            <div style={prevButtonWrapStyle}>
              <FontAwesome name="angle-left" style={navButtonStyle} />
            </div>

            <div><img src="//placehold.it/300x300?text=CHART AREA" /></div>
            <span style={titleStyle}>{this.state.year}년 {this.state.month}월 {this.state.week}째 주</span>
            <span style={descStyle}>각 영앙소 뱃지가 한 개씩 채워지면 별을 획득할 수 있으며,<br />뱃지는 매 주 일요일에 리셋되어 사라집니다.</span>

            <div style={nextButtonWrapStyle}>
              <FontAwesome name="angle-right" style={navButtonStyle} />
            </div>
        </div>
        );
    }
}

export default MyNutritionStatus;
