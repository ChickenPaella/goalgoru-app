import React from 'react';
import { connect } from 'react-redux';
import { openAside } from '../actions/AsideAction';
import { dimming, undimming } from '../actions/DimmerAction';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
    render() {
        let style = {
            height: "50px",
            backgroundColor: "#6C3AC0",
            color:"#ffffff",
            position: "relative",
            overflow: "hidden"
        }

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

        let menuButtonStyle = {
            lineHeight: "51px",
            padding: "0 18px",
            fontSize: "24px"
        }

        let searchButtonStype = {
            lineHeight: "51px",
            padding: "0 18px",
            fontSize: "24px",
            float: "right",
            color: "#ffffff"
        }

        return <div style={style}>
            <FontAwesome name="bars" style={menuButtonStyle} onClick={this.props.onOpenAside} />
            <span style={titleStyle}>{this.props.title}</span>
            <FontAwesome name="refresh" style={searchButtonStype} />
        </div>
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
        title: state.navi.title
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
