import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router'

class MenuItem extends React.Component {
    render() {
        let style = {
            marginBottom: "18px",
            backgroundColor: "#ffffff",
            boxShadow: "rgba(0, 0, 0, 0.34902) 0px 10px 40px -14px"
        }
        let linkStyle = {
            textDecoration: "none",
            color: "#333333"
        }

        let mainWrapperStyle = {
            padding: "18px",
            borderWidth: "0px 0px 1px 0px",
            borderStyle: "solid",
            borderColor: "#efefef",
            position: "relative"
        }
        let nameStyle = {
            fontSize: "19px"
        }
        let typeStyle = {
            fontWeight: 700,
            fontSize: "15px",
            marginTop: "2px",
            color: "#FF4955",
            position: "relative",
            top: "2px"
        }
        let subWrapperStyle = {
            padding: "12px 18px",
            color: "#888888",
            fontSize: "12px",
            height: "14px"
        }
        let addressStyle = {
            float:"left"
        }
        let phoneStyle = {
            float: "right"
        }
        let distanceStyle = {
            position: "absolute",
            top: "18px",
            right: "18px",
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
