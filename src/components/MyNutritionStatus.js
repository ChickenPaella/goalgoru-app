import React from 'react';
import FontAwesome from 'react-fontawesome';
import { PieChart, Pie, Cell } from 'recharts';
import { connect } from 'react-redux';
import { prevMonth, nextMonth } from '../actions/MyPageAction';

class MyNutritionStatus extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "width": props.width,
          "unauthNumber": 1
        };
    }

    componentDidMount(x,y,z){
     this.setState({width:window.innerWidth});
    }

    render() {
        let style = {
          textAlign: "center",
          position: "relative",
          padding: "10px 40px 30px 40px",
          color: "#FFFFFF",
          backgroundColor: "#6C3AC0"
        };

        let chartStyle = {
          maxWidth: "100%",
          margin: "10px 0px"
        };

        let titleStyle = {
          display: "block",
          fontSize: "1.2em",
          fontStyle: "italic"
        };

        let unauthStyle = {
          display: "block",
          marginBottom: "10px"
        };

        let descStyle = {
          display: "block",
          color: "#B8AFE3",
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

        let buttonWrapStyle = {
          position: "absolute",
          textAlign: "center",
          height: "100%",
          width: "40px",
          top: "0px",
          color: "#FFFFFF"
        };
        let prevButtonWrapStyle = Object.assign({}, buttonWrapStyle, {"left":  "0px"});
        let nextButtonWrapStyle = Object.assign({}, buttonWrapStyle, {"right": "0px"});

        let indexStyle = {
          fontSize: "0.8em",
          marginBottom: "10px"
        };

        const COLOR_FAT = "#fcf41e";
        const COLOR_PROTEIN = "#ffffff";
        const COLOR_CARBS = "#ff8b36";

        const mapToComponents = (data) => {
          return data.map((item, i) => {
            return (<span style={{color: item.color, padding: "0px 5px"}}>■ {item.name}</span>);
          });
        };

        /* Graph 처리 */
        let data = [{name: '단백질', value: 90, color: "#ff8b36"}, {name: '탄수화물', value: 5, color: "#FFFFFF"}, {name: '지방', value: 5, color: "#fcf41e"}];
        const RADIAN = Math.PI / 180;
        const percentLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
         	const radius = outerRadius * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text x={x} y={y} fill="#333" dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        };

        const nameLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = outerRadius * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text x={x} y={y} fill="#333" dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
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
              <PieChart width={this.state.width / 2} height={this.state.width / 2} style={{"display": "inline-block", "margin": "20px"}}>
                <Pie data={data} outerRadius={this.state.width / 4} fill="#F3EA52" label={percentLabel} labelLine={false} stroke="none">
                  {data.map((entry, index) => <Cell fill={entry.color}/>)}
                </Pie>
              </PieChart>
              <div style={indexStyle}>
                {mapToComponents(data)}
              </div>
            </div>

            <span style={unauthStyle}>
              미인증 식사 개수: {this.state.unauthNumber}개
            </span>
            <span style={descStyle}>
              식사 인증 가능 기간은<br />식사일로부터 일주일입니다.
            </span>

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
