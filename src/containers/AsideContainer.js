import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AsideMenu from '../components/AsideMenu';
import ProfileImage from '../components/ProfileImage';
import { closeAside } from '../actions/AsideAction';
import { undimming } from '../actions/DimmerAction';
import { sessionLogout } from '../actions/SessionAction';

class AsideContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            loginUrl: "http://goalgoru.com:8080/api/auth/kakao"
            // loginUrl: "http://192.168.51.51:8080/api/auth/kakao"
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
            backgroundColor: "#FFFFFF",
            borderWidth: "0px 1px 0px 0px",
            borderStyle: "solid",
            borderColor: "#888888"
        }

        let closeButtonStyle = {
            position: "absolute",
            right: "0px",
            top: "0px",
            fontSize: "14px",
            padding: "20px 20px",
            color: "#444444",
            textDecoration: "none"
        }

        let loginButtonStyle = {
            fontSize: "14px",
            display:"inline-block",
            padding: "12px 24px",
            textAlign: "center",
            position: "relative",
            width: "232px"
        }

        let profileWrapperstyle = {
            position: "relative",
            height: "256px"
        }
        let logoutStyle = {
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "92px",
            height: "30px",
            lineHeight: "33px",
            textAlign: "center",
            margin: "10px 0",
            borderWidth: "0 0 0 1px",
            borderStyle: "solid",
            borderColor: "#efefef",
            color: "#888888"
        }

        return this.props.active?<div style={style}>
            <div style={profileWrapperstyle}>
            <ProfileImage />
            {!this.props.isLogin?<a style={loginButtonStyle} href={this.state.loginUrl}>카카오계정으로 로그인</a>:null}
            </div>
            <a style={closeButtonStyle} onClick={this.props.onCloseAside}>닫기</a>
            <AsideMenu />
            {this.props.isLogin?<div style={logoutStyle} onClick={this.props.onSessonLogout}>로그아웃</div>:null}
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
        onSessonLogout: () => {
            location.href="/";
        },
        onCloseAside: () => {
            dispatch(undimming());
            dispatch(closeAside());
        }
    };
};

AsideContainer = connect(mapStateToProps, mapDispatchToProps)(AsideContainer);

export default AsideContainer;
