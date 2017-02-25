import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router'

class MenuItem extends React.Component {
    render() {
        let style = {
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 20px -14px"
        }
        let linkStyle = {
            textDecoration: "none",
            color: "#333333"
        }

        let mainWrapperStyle = {
            padding: "20px",
            borderWidth: "0px 0px 1px 0px",
            borderStyle: "solid",
            borderColor: "#efefef",
            position: "relative"
        }
        let nameStyle = {
            fontSize: "17px"
        }
        let typeStyle = {
            fontWeight: 500,
            fontSize: "13px",
            marginTop: "6px",
            color: "#FF4955"
        }
        let subWrapperStyle = {
            padding: "0 20px",
            color: "rgb(136, 136, 136)",
            fontSize: "13px",
            height: "38px",
            lineHeight: "40px"
        }
        let addressStyle = {
            float:"left"
        }
        let phoneStyle = {
            float: "right"
        }
        let distanceStyle = {
            fontSize: "16px",
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#FF4955"
        }
        return <li style={style}>
            <Link to={"/detail/"+this.props.seq} style={linkStyle}>
                <div style={mainWrapperStyle}>
                    <div style={nameStyle}>{this.props.name}</div>
                    <div style={typeStyle}>{this.props.type}</div>
                    <span style={distanceStyle}><FontAwesome name="map-marker"/>&nbsp;{this.props.distance}m</span>
                </div>
                <div style={subWrapperStyle}>
                    <span style={addressStyle}>{this.props.address}</span>
                    <span style={phoneStyle}>{this.props.phone}</span>
                </div>
            </Link>
        </li>
    }
}

export default MenuItem;
