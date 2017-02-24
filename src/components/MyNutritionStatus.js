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

        let chartStyle = {
          maxWidth: "100%",
          margin: "10px 0px"
        };

        let titleStyle = {
          display: "block",
          fontWeight: "bold"
        };

        let descStyle = {
          display: "block",
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

            <span style={titleStyle}>{this.state.year}년 {this.state.month}월 {this.state.week}째 주</span>
            <span>(2017.02.12. ~ 2017.02.18.)</span>
            <div><img style={chartStyle} src="//placehold.it/300x300?text=CHART AREA" /></div>

            <span style={descStyle}>식사 인증 가능기간은 식사일로부터 일주일입니다.<br />미인증 식사 개수: 1개</span>

            <div style={nextButtonWrapStyle}>
              <FontAwesome name="angle-right" style={navButtonStyle} />
            </div>
          </div>
        );
    }
}

export default MyNutritionStatus;
