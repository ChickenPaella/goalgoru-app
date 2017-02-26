import React from 'react';
import { connect } from 'react-redux';

class ProfileImage extends React.Component {
    render() {
        let style = {
            backgroundPoisition: "center",
            backgroundSize: "cover",
            backgroundImage: "url("+(!!this.props.imageUrl?this.props.imageUrl:"/assets/images/men_prof.png")+")",
            width: "92px",
            height: "92px",
            margin: "56px auto 8px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#dfdfddf",
            borderRadius: "999px",
            backgroundColor: "#5736C8"
        }
        if(this.props.isLogin) {
            style = Object.assign({}, style, {
                backgroundColor : "#FFFFFF"
            });
        }
        let imageStyle = {
            minWidth: "120px",
            minHeight: "120px",
            opacity: 0
        }
        let nameStyle = {
            fontSize: "24px",
            width: "100%",
            textAlign: "center",
            marginTop:"15px"
        }
        let starStyle = {
            textAlign:"center",
            color: "#5736C8",
            fontSize: "13px",
            marginTop: "6px",
        }
        let boldStype = {
            fontWeight: 700
        }
        let boxWrapperStyle= {
            height: "75px",
            marginTop: "27px",
        }
        let boxStyle = {
            float:"left",
            width: "70px",
            height: "73px",
            position: "relative",
            backgroundColor: "#5736C8",
            borderWidth: "1px 0 1px 0",
            borderColor: "#5736C8",
            borderStyle: "solid",
            backgroundSize: "29px 29px",
            backgroundImage: "url(/assets/images/men_star01.png)",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "21px",
            backgroundPositionY: "13px",
        }
        let boxStyleInactive = {
            float:"left",
            width: "70px",
            height: "73px",
            position: "relative",
            borderWidth: "1px 0 1px 0",
            backgroundColor: "#f5f5f5",
            borderColor: "#f5f5f5",
            borderStyle: "solid"
        }
        let numberStyleActive = {
            position: "absolute",
            top: "23px",
            width: "100%",
            display: "inline-block",
            textAlign: "center",
            fontSize: "13px",
            color: "#5836c9"
        }
        let numberStyleInActive = {
            position: "absolute",
            top: "20px",
            width: "100%",
            display: "inline-block",
            textAlign: "center",
            fontSize: "19px",
            fontWeight: "bold",
            color: "#000000"
        }
        let labelStyleActive = {
            color:"#ffffff",
            fontSize: "13px",
            display: "block",
            textAlign: "center",
            position: "absolute",
            bottom: "9px",
            width: "100%",
        }

        let labelStyleInActive = {
            color:"#a3a3a3",
            fontSize: "13px",
            display: "block",
            textAlign: "center",
            position: "absolute",
            bottom: "9px",
            width: "100%",
        }
        let plusStyle = {
            backgroundImage: "url(/assets/images/men_plus.png)",
            display:"inline-block",
            width: "11px",
            height: "11px",
            position: "absolute",
            left: "65px",
            backgroundSize: "cover",
            top: "29px",
            zIndex: 1
        }
        return <div>
            <div style={style}>
                <img style={imageStyle} src={this.props.imageUrl} />
                </div>
                <div style={nameStyle}>{this.props.username}</div>
                <div style={starStyle}>보유한 별 <span style={boldStype}>총 15개</span></div>
                {this.props.isLogin?<div style={boxWrapperStyle}>
                    <div style={boxStyle}><span style={numberStyleActive}>1</span><span style={labelStyleActive}>적립하기</span></div>
                    <div style={boxStyleInactive}><span style={numberStyleInActive}>4</span><span style={labelStyleInActive}>단백질</span><span style={plusStyle}></span></div>
                    <div style={boxStyleInactive}><span style={numberStyleInActive}>0</span><span style={labelStyleInActive}>탄수화물</span><span style={plusStyle}></span></div>
                    <div style={boxStyleInactive}><span style={numberStyleInActive}>3</span><span style={labelStyleInActive}>지방</span></div>
                </div>:null}
            </div>
    }
}

let mapStateToProps = (state) => {
    return {
        imageUrl: state.session.profileImage,
        username: state.session.username,
        isLogin: state.session.isLogin,
    }
}

ProfileImage = connect(mapStateToProps, undefined)(ProfileImage);

ProfileImage.propTypes = {
    imageUrl: React.PropTypes.string.isRequired
}

export default ProfileImage;
