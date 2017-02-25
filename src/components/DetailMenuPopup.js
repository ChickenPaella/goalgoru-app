import React from 'react';
import { connect } from 'react-redux';
import { undimming } from '../actions/DimmerAction';
import { closePopup } from '../actions/PopupAction';
import FontAwesome from 'react-fontawesome';
import { getNutriOfFood } from '../modules/ApiModule';

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
        let amountStyle = {
            float: "right"
        }
        let closeButtonStyle = {
            position: "absolute",
            top: "12px",
            right: "12px"
        }
        let listStyle = {
            height:"252px",
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
        let listMajorItemStyle = Object.assign({}, listItemStyle, {color: "#FF4955"});
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
            <div style={listStyle}>
                <div style={listItemStyle}><span>탄수화물(g)</span><span style={amountStyle}>{this.props.content[0]}({this.props.content[1]}%)</span></div>
                <div style={listItemStyle}><span>지방(g)</span><span style={amountStyle}>{this.props.content[2]}({this.props.content[3]}%)</span></div>
                <div style={listItemStyle}><span>단백질(g)</span><span style={amountStyle}>{this.props.content[4]}({this.props.content[5]}%)</span></div>
                <div style={listItemStyle}><span>식이섬유(g)</span><span style={amountStyle}>{this.props.content[6]}</span></div>
                <div style={listItemStyle}><span>칼륨(mg)</span><span style={amountStyle}>{this.props.content[7]}</span></div>
                <div style={listItemStyle}><span>나트륨(mg)</span><span style={amountStyle}>{this.props.content[8]}</span></div>
                <div style={listItemStyle}><span>칼로리(kcal)</span><span style={amountStyle}>{this.props.content[9]}</span></div>
            </div>
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
