import React from 'react';
import FontAwesome from 'react-fontawesome';
import { PieChart, Pie } from 'recharts';
import { connect } from 'react-redux';
import { prevMonth, nextMonth } from '../actions/MyPageAction';

class MyNutritionStatus extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "width": props.width
        };
    }

    componentDidMount(x,y,z){
     this.setState({width:window.innerWidth});
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
        let data = [{name: '단', value: 400}, {name: '탄', value: 300}, {name: '지', value: 300}];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
         	const radius = outerRadius * 1.1;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text x={x} y={y} fill="#6C3AC0" dominantBaseline="central">
              {`${data[index].name + ": " + (percent * 100).toFixed(0)}%`}
            </text>
          );
        };

        return (
          <div style={style}>
            <div style={prevButtonWrapStyle} onClick={this.props.onPrevMonth}>
              <FontAwesome name="angle-left" style={navButtonStyle} />
            </div>

            <span style={titleStyle}>{this.props.year}년 {this.props.month + 1}월</span>
            <div style={{"textAlign": "center"}}>
              <PieChart width={this.state.width - 100} height={this.state.width - 100} style={{"display": "inline-block"}}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={this.state.width / 4} innerRadius={this.state.width / 4 - 20} fill="#F3EA52" label={renderCustomizedLabel} />
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
        year: state.mypage.year,
        month: state.mypage.month
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
