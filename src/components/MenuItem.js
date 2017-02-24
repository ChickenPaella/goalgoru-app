import React from 'react';
import { Link } from 'react-router'

class MenuItem extends React.Component {
    constructor(args) {
        super(args);
    }
    render() {
        let style = {
            height: "80px",
            marginBottom: "18px",
            backgroundColor: "#ffffff",
            boxShadow: "rgba(0, 0, 0, 0.34902) 0px 10px 40px -14px"
        }
        let titleStyle = {
            fontSize: "16px",
            fontWeight: "300",
            color: "#444444"
        }
        let imageWrapperStyle = {
            float: "left",
            backgroundImage: "url("+this.props.imageUrl+")",
            backgroundPoisition: "center",
            backgroundSize: "cover",
            width: "120px",
            height: "80px",
        }
        let imageStyle = {
            opacity: 0,
            minWidth: "120px",
            minHeight: "80px",
        }
        let contentWrapperStyle = {
            padding: "22px 0px 22px 142px"
        }
        let descriptionStyle = {
            fontWeight: "300",
            fontSize: "13px",
            color: "#FF4955",
            padding: "4px 0",
            fontStyle: "italic"
        }
        let categoryStyle = {
            fontWeight:"500",
        }
        let linkStyle = {
            textDecoration: "none"
        }
        return <li style={style}>
            <Link to={"/detail/"+this.props.id} style={linkStyle}>
                <div style={imageWrapperStyle}><img style={imageStyle} src={this.props.imageUrl} /></div>
                <div style={contentWrapperStyle}>
                    <div style={titleStyle}>{this.props.title}</div>
                    <div style={descriptionStyle}>
                        <span style={categoryStyle}>{this.props.category}</span>&nbsp;/&nbsp;<span>{this.props.distance}km</span>
                    </div>
                </div>
            </Link>
        </li>
    }
}

export default MenuItem;
