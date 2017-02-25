import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { openAside } from '../actions/AsideAction';
import { dimming, undimming } from '../actions/DimmerAction';

class Navigation extends React.Component {
    render() {
        let style = {
            zIndex: 200,
            height: "50px",
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "#5836c9",
            color:"#ffffff",
            top:"0",
            position: "fixed",
            overflow: "hidden"
        }
        let styleTransparent = Object.assign({}, style, {backgroundColor: "rgba(0,0,0,0)"});

        let titleStyle = {
            width: "180px",
            lineHeight: "51px",
            verticalAlign: "middle",
            textAlign: "center",
            textDecoration: "none",
            position: "absolute",
            left: "50%",
            fontSize: "18px",
            paddingTop: "2px",
            marginLeft: "-90px"
        }

        let leftButtonStyle = {
            height: "31px",
            padding: "11px 15px",
            fontSize: "24px",
            color: "#ffffff"
        }

        let rightButtonStyle = {
            height: "31px",
            padding: "11px 15px",
            fontSize: "24px",
            float: "right",
            color: "#ffffff"
        }
        let logoStype = {
            width: "99px",
            height: "23px",
            position: "relative",
            top:"3px"
        }
        switch(this.props.mode) {
            case 1:     //setActionBarBackward
                return <div style={this.props.transparent?styleTransparent:style}>
                    <img style={leftButtonStyle} src={"/assets/images/top_ico_back.png"} onClick={browserHistory.goBack} />
                    <span style={titleStyle}>{this.props.title}</span>
                    <img src={"/assets/images/top_ico_location.png"} style={rightButtonStyle} />
                </div>
            case 2:
                return <div style={style}>
                    <Link style={leftButtonStyle} to="/"><img src={"/assets/images/top_ico_home.png"}  style={leftButtonStyle} name="home" /></Link>
                    <span style={titleStyle}>{this.props.title}</span>
                </div>
            case 3:     //setActionBarOnlyBackward
                return <div style={this.props.transparent?styleTransparent:style}>
                    <img src={"/assets/images/top_ico_back.png"} style={leftButtonStyle} onClick={browserHistory.goBack} />
                    <span style={titleStyle}>{this.props.title}</span>
                </div>
            default:
                return <div style={style}>
                    <img src={"/assets/images/top_ico_menu.png"} style={leftButtonStyle} onClick={this.props.onOpenAside} />
                    <span style={titleStyle}><img style={logoStype} src="/assets/images/top_logo.png"/></span>
                    <Link to="location">
                        <img src={"/assets/images/top_ico_location.png"}  style={rightButtonStyle} />
                    </Link>
                </div>
        }
    }
}

Navigation.defaultProps = {
    title: "고루고루"
}

Navigation.PropTypes = {
    title : React.PropTypes.string.isRequired
}

let mapStateToProps = (state) => {
    return {
        title: state.navi.title,
        mode: state.navi.mode,
        transparent: state.navi.transparent,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onOpenAside: () => {
            dispatch(dimming());
            dispatch(openAside());
        }
    };
};

Navigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navigation;
