import React from 'react';
import { connect } from 'react-redux';
import { openAside } from '../actions/AsideAction';
import { dimming, undimming } from '../actions/DimmerAction';
import { changeTitle } from '../actions/NavigationAction';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

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
            fontSize: "24px",
            color:"#444444"
        }

        let searchButtonStype = {
            lineHeight: "51px",
            padding: "0 18px",
            fontSize: "24px",
            color: "#444444",
            float: "right",
        }

        return <div style={style}>
            <FontAwesome name="bars" style={menuButtonStyle} onClick={this.props.onOpenAside} />
            <span style={linkStyle}>{this.props.title}</span>
            <Link to="search" onClick={this.props.onOpenSearch}><FontAwesome name="search" style={searchButtonStype} /></Link>
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
        },
        onOpenSearch: () => {
            dispatch(changeTitle('/search'));
        }
    };
};

Navigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navigation;
