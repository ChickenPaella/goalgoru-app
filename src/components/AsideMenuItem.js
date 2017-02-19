import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { undimming } from '../actions/DimmerAction';
import { closeAside } from '../actions/AsideAction';

class AsideMenuItem extends React.Component {
    render() {
        let style = {
            borderStyle: "solid",
            borderWidth: "1px 0px 0px",
            borderColor: "#dfdfdf",
            backgroundColor: this.props.active?"#888888":"#ffffff"
        }
        let linkStyle = {
            display: "block",
            padding: "17px 0 16px 24px",
            textDecoration: "none",
            color: this.props.active?"#ffffff":"#666666"
        }
        return <li style={style}>
            <Link to={this.props.path} style={linkStyle} onClick={this.props.onMove}>{this.props.name}</Link>
        </li>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMove: (title) => {
            dispatch(undimming());
            dispatch(closeAside());
        }
    }
}
AsideMenuItem = connect(null, mapDispatchToProps)(AsideMenuItem);

AsideMenuItem.propTypes = {
    active: React.PropTypes.bool.isRequired
}

export default AsideMenuItem;
