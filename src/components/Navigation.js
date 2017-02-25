import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { openAside } from '../actions/AsideAction';
import { dimming, undimming } from '../actions/DimmerAction';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
    render() {
        let style = {
            zIndex: 200,
            height: "50px",
            width: "100%",
            backgroundColor: "#6C3AC0",
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
            lineHeight: "51px",
            padding: "0 18px",
            fontSize: "24px",
            color: "#ffffff"
        }

        let rightButtonStyle = {
            lineHeight: "51px",
            padding: "0 18px",
            fontSize: "24px",
            float: "right",
            color: "#ffffff"
        }
        switch(this.props.mode) {
            case 1:     //setActionBarBackward
                return <div style={this.props.transparent?styleTransparent:style}>
                    <FontAwesome style={leftButtonStyle} name="arrow-left" onClick={browserHistory.goBack} />
                    <span style={titleStyle}>{this.props.title}</span>
                    <FontAwesome name="map" style={rightButtonStyle} />
                </div>
            case 2:
                return <div style={style}>
                    <Link style={leftButtonStyle} to="/"><FontAwesome style={leftButtonStyle} name="home" /></Link>
                    <span style={titleStyle}>{this.props.title}</span>
                </div>
            case 3:     //setActionBarOnlyBackward
                return <div style={this.props.transparent?styleTransparent:style}>
                    <FontAwesome style={leftButtonStyle} name="arrow-left" onClick={browserHistory.goBack} />
                    <span style={titleStyle}>{this.props.title}</span>
                </div>
            default:
                return <div style={style}>
                    <FontAwesome name="bars" style={leftButtonStyle} onClick={this.props.onOpenAside} />
                    <span style={titleStyle}>{this.props.title}</span>
                    <Link to="location">
                        <FontAwesome name="compass" style={rightButtonStyle} />
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
