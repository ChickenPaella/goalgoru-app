import React from 'react';
import FontAwesome from 'react-fontawesome';
import { PieChart, Pie } from 'recharts';
import { connect } from 'react-redux';
import { prevMonth, nextMonth } from '../actions/MyPageAction';

class MyNutritionStatus extends React.Component {
    constructor(props, context) {
        super(props, context);
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
          fontWeight: "bold",
          fontSize: "1.2em"
        };

        let descStyle = {
          display: "block",
          fontSize: "0.8em"
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

        /* Graph 처리 */
        let data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300}, {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
         	const radius = outerRadius * 1.3;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text x={x} y={y} fill="#6C3AC0" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        };

        return (
          <div style={style}>
            <div style={prevButtonWrapStyle} onClick={this.props.onPrevMonth}>
              <FontAwesome name="angle-left" style={navButtonStyle} />
            </div>

            <span style={titleStyle}>{this.props.date}년 {this.props.date}월</span>
            <div style={{"textAlign": "center"}}>
              <PieChart width={300} height={300} style={{"display": "inline-block"}}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={50} fill="#F3EA52" />
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#6C3AC0" label={renderCustomizedLabel} />
              </PieChart>
            </div>

            <span style={descStyle}>식사 인증 가능기간은 식사일로부터 일주일입니다.<br />미인증 식사 개수: 1개</span>

            <div style={nextButtonWrapStyle} onClick={this.props.onNextMonth}>
              <FontAwesome name="angle-right" style={navButtonStyle} />
            </div>
          </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        date: undefined
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
      onPrevMonth: () => {
          dispatch(prevMonth());
      },
      onNextMonth: () => {
          dispatch(nextMonth());
      }
    };
};

MyNutritionStatus = connect(mapStateToProps, mapDispatchToProps)(MyNutritionStatus);

export default MyNutritionStatus;
