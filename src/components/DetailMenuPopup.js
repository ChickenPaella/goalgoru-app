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
                {name: "탄수화물", major:true, unit: "g", amount: 5},
                {name: "지방", major:false, unit: "g", amount: 5},
                {name: "단백질", major:false, unit: "g", amount: 5},
                {name: "식이섬유", major:false, unit: "g", amount: 5},
                {name: "콜레스테롤", major:false, unit: "g", amount: 5},
                {name: "비타민", major:false, unit: "g", amount: 5},
                {name: "나트륨", major:false, unit: "g", amount: 5},
                {name: "철분", major:false, unit: "g", amount: 5}
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
            top: "50%",
            zIndex: 1001,
            width: "80%",
            margin: "0 10%",
            marginTop: "-220px",
            backgroundColor: "#FFFFFF",
            borderRadius: "5px"
        }
        let headerStyle = {
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            padding: "23px 0 20px 0",
            margin: "0 24px",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "italic",
        }
        let labelStyle = {

        }
        let amountStyle = {
            float: "right"
        }
        let closeButtonStyle = {
            position: "absolute",
            top: "12px",
            right: "12px"
        }
        let listStyle = {
            height:"288px",
            listStyle: "none",
            padding: "8px 0",
            margin: 0,
            borderTop: "1px solid #efefef"
        }
        let listItemStyle = {
            padding: "9px 0px",
            margin: "0px 24px",
            fontWeight: 500
        }
        let listMajorItemStyle = Object.assign({}, listItemStyle, {color: "#FDF51E"});
        let buttonStyle = {
            display: "block",
            textAlign: "center",
            width: "100%",
            height: "60px",
            backgroundColor: "#fdf51e",
            border: "none",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            fontSize: "17px",
            color: "#444444",
        }
        return <div style={style}>
            <div style={headerStyle}>{this.props.title}</div>
            <ul style={listStyle}>
            {this.state.nutri.map((n, i) => {
                return <li style={n.major?listMajorItemStyle:listItemStyle} key={i}><span style={labelStyle}>{n.name}({n.unit})</span><span style={amountStyle}>{n.amount}</span></li>
            })}
            </ul>
            <button style={buttonStyle}>잘 먹겠습니다!</button>
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
