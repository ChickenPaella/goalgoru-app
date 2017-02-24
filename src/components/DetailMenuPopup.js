import React from 'react';
import { connect } from 'react-redux';
import { undimming } from '../actions/DimmerAction';
import { closePopup } from '../actions/PopupAction';
import FontAwesome from 'react-fontawesome';

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
        if(!this.props.visible) {
            return null;
        }

        let style = {
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1001,
            width: "80%",
            height: "60%",
            margin: "30% 10%",
            backgroundColor: "#FFFFFF",
            borderRadius: "5px"
        }
        let headerStyle = {
            backgroundColor: "#FFF45D",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            padding: "28px 0 22px 0",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "italic"
        }
        let labelStyle = {

        }
        let amountStyle = {

        }
        let closeButtonStyle = {
            position: "absolute",
            top: "12px",
            right: "12px"
        }
        let listStyle = {
            listStyle: "none",
            padding: 0,
            margin: 0
        }
        return <div style={style}>
            <div style={headerStyle}>{this.props.title}</div>
            <ul style={listStyle}>
            {this.state.nutri.map((n, i) => {
                return <li key={i}><span style={labelStyle}>{n.name}({n.unit})</span><span style={amountStyle}>{n.amount}</span></li>
            })}
            </ul>
            <FontAwesome style={closeButtonStyle} name="times" onClick={this.props.onClosePopup} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        visible: state.popup.visible,
        title: state.popup.title,
        content: state.popup.content
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClosePopup: () => {
            dispatch(undimming());
            dispatch(closePopup());
        }
    }
}
DetailMenuPopup.defaultProps = {
    visible: false
}

DetailMenuPopup = connect(mapStateToProps, mapDispatchToProps)(DetailMenuPopup);

export default DetailMenuPopup;
