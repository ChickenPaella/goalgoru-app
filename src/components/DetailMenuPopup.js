import React from 'react';
import { connect } from 'react-redux';
import { undimming } from '../actions/DimmerAction';

class DetailMenuPopup extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            nutri: [
                {name: "탄수화물", unit: "g", amount: 5},
                {name: "지방", unit: "g", amount: 5},
                {name: "단백질", unit: "g", amount: 5},
                {name: "식이섬유", unit: "g", amount: 5},
                {name: "콜레스테롤", unit: "g", amount: 5},
                {name: "비타민", unit: "g", amount: 5},
                {name: "나트륨", unit: "g", amount: 5},
                {name: "철분", unit: "g", amount: 5}
            ]
        }
    }
    render() {
        let style = {
            position: "fixed",
            width: "90%",
            height: "80%",
            padding: "5% 10%",
            backgroundColor: "#FFFFFF"
        }
        let headerStyle = {

        }
        let labelStyle = {

        }
        let amountStyle = {

        }
        return <div style={style}>
            <div style={headerStyle}></div>
            <ul>
            {this.state.nutri.map((n, i) => {
                return <li><span style={labelStyle}>{n.name}({n.unit})</span><span style={amountStyle}>{n.amount}</span></li>
            })}
            </ul>
        </div>
    }
}

export default DetailMenuPopup;
