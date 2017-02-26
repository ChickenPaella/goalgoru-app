import React from 'react';
import { connect } from 'react-redux';
import { dimming, undimming } from '../actions/DimmerAction';
import { openStandbyPopup ,closeConfirmPopup } from '../actions/ConfirmPopupAction';

class ConfirmPopup extends React.Component {


    render() {
        let style = {
            position: "fixed",
            background: "#ffffff",
            zIndex: 1000,
            width: "280px",
            left: "50%",
            top: "50%",
            marginLeft: "-140px",
            height: "160px",
            marginTop: "-80px",
        }
        let productStyle = {
            fontSize: "15px",
            fontStyle: "italic",
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "12px",
            color: "rgb(252, 67, 86)"
        }
        let messageStyle = {
            textAlign: "center",
            paddingBottom: "32px",
            fontSize: "20px",
            borderWidth: "0px 0px 1px 0px",
            borderColor: "#efefef",
            borderStyle: "solid",
            margin: "0 16px",
        }
        let singleButtonWrapperStyle = {
            height: "45px",
            lineHeight: "47px",
            textAlign: "center",
            fontSize: "18px"
        }
        let buttonWrapperStyle = {
            width: "50%",
            display: "inline-block",
            textAlign: "center",
            height: "45px",
            lineHeight: "48px"
        }
        let buyButton = Object.assign({}, buttonWrapperStyle, {
            color: "rgb(252, 67, 86)",
        });


        return this.props.visible?<div style={style}>
            <div style={productStyle}>{this.props.product}</div>
            <div style={messageStyle}>{this.props.mode == 0?"구매하시겠습니까?":"구매를 완료하였습니다."}</div>
            {this.props.mode == 0?<div><span style={buttonWrapperStyle} onClick={this.props.onCloseConfirmPopup}>취소</span><span style={buyButton} onClick={() => {this.props.onNextConfirmStep(this.props.product, "구매를 완료하였습니다.")}}>구매하기</span></div>:<div style={singleButtonWrapperStyle} onClick={this.props.onCloseConfirmPopup}>확인</div>}
        </div>:null;
    }
}

let mapStateToProps = (state) => {
    return {
        mode: state.confirm.mode,
        message: state.confirm.message,
        product: state.confirm.product,
        visible: state.confirm.visible
    }
}

let mapDispatchToPros = (dispatch) => {
    return {
        onCloseConfirmPopup: () => {
            dispatch(undimming());
            dispatch(closeConfirmPopup());
        },
        onNextConfirmStep: (product, message) => {
            dispatch(closeConfirmPopup());
            dispatch(openStandbyPopup(product, "구매를 완료하였습니다."));
        }

    }
}

ConfirmPopup = connect(mapStateToProps, mapDispatchToPros)(ConfirmPopup);

export default ConfirmPopup;
