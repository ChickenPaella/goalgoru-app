import React from 'react';
import { connect } from 'react-redux';
import AsideMenu from '../components/AsideMenu';
import ProfileImage from '../components/ProfileImage';
import { closeAside } from '../actions/AsideAction';
import { undimming } from '../actions/DimmerAction';

class AsideContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            // loginUrl: "http://goalgoru.com:8080/api/auth/kakao"
            loginUrl: "http://192.168.51.51:8080/api/auth/kakao"
        }
    }
    render() {
        let style = {
            width: "280px",
            height: "100%",
            position: "fixed",
            left: "0px",
            top: "0px",
            zIndex: "1000",
            backgroundColor: "#ffffff",
            borderWidth: "0px 1px 0px 0px",
            borderStyle: "solid",
            borderColor: "#888888"
        }

        let closeButtonStyle = {
            position: "absolute",
            right: "0px",
            top: "0px",
            padding: "12px 16px",
            color: "#888888",
            textDecoration: "none"
        }

        let loginButtonStyle = {
            textDecoration: "none",
            backgroundColor: "#ffef3f",
            border: "1px solid #ffde00",
            color:"#333333",
            borderRadius: "5px",
            padding: "12px 24px",
            textAlign: "center",
            position: "relative",
            top: "100px",
            left: "50%",
            marginLeft: "-98px",
            width: "220px"
        }

        let profileWrapperstyle = {
            position: "relative",
            height: "200px"
        }

        return this.props.active?<div style={style}>
            <div style={profileWrapperstyle}>
            {this.props.isLogin?
                <ProfileImage imageUrl={this.props.profileImage} />:<a style={loginButtonStyle} href={this.state.loginUrl}>카카오계정으로 로그인</a>}
            </div>
            <a style={closeButtonStyle} onClick={this.props.onCloseAside}>닫기</a>
            <AsideMenu />
        </div>:null;
    }
}

let mapStateToProps = (state) => {
    return {
        active: state.aside.visible,
        isLogin: state.session.isLogin,
        profileImage: state.session.profileImage,
        username: state.session.username
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onCloseAside: () => {
            dispatch(undimming());
            dispatch(closeAside());
        }
    };
};

AsideContainer = connect(mapStateToProps, mapDispatchToProps)(AsideContainer);

export default AsideContainer;
