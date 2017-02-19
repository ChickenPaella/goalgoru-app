import React from 'react';
import { connect } from 'react-redux';
import { openAside } from '../actions/AsideAction';
import { dimming, undimming } from '../actions/DimmerAction';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
    render() {
        let style = {
            height: "50px",
            backgroundColor: "#fff",
            borderColor: "#dfdfdf",
            borderWidth: "0px 0px 1px 0px",
            borderStyle: "solid",
            position: "relative",
            overflow: "hidden"
        }

        let linkStyle = {
            width: "180px",
            lineHeight: "51px",
            verticalAlign: "middle",
            textAlign: "center",
            textDecoration: "none",
            color: "#444444",
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

        return <div style={style}>
            <FontAwesome name="bars" style={menuButtonStyle} onClick={this.props.onOpenAside}/>
            <a href="/" style={linkStyle}>{this.props.title}</a>
        </div>
    }
}

Navigation.propTypes = {
    title: React.PropTypes.string.isRequired
}

let mapDispatchToProps = (dispatch) => {
    return {
        onOpenAside: () => {
            dispatch(dimming());
            dispatch(openAside());
        }
    };
};

Navigation = connect(undefined, mapDispatchToProps)(Navigation);

export default Navigation;
