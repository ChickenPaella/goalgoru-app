import React from 'react';
import { Link } from 'react-router';

class ImageSliderItem extends React.Component {

    render() {
        let style = {
            position: "absolute",
            backgroundSize: "280px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            width: "100%",
            height: "270px",
            backgroundImage: "url("+this.props.imageUrl+")",
            overflow: "hidden"
        }

        if(!this.props.visible) {
            style = Object.assign({}, style, {opacity: 0});
        }

        let titleStyle = {
            position:"absolute",
            top:"36px",
            left:"29px",
            fontStyle:"italic",
            fontWeight: 100,
            fontSize:"34px",
            wordSpacing:"-2px",
        }

        let subtitleStyle = {
            position:"absolute",
            top:"16px",
            fontStyle:"italic",
            left:"38px",
            fontSize: "15px",
            fontWeight: 700,
        }

        let imageStyle = {
            minHeight: "200px",
            opacity: 0
        }

        let linkStyle = {
            textDecoration: "none",
            color: "#FFFFFF"
        }

        return <li style={style}>
            <Link style={linkStyle} to={"/detail/"+this.props.id}>
                <div style={subtitleStyle}>{this.props.subtitle}</div>
                <div style={titleStyle}>{this.props.title}</div>
                <img src={this.props.imageUrl} style={imageStyle} />
            </Link>
        </li>
    }
}

ImageSliderItem.PropTypes = {
    id: React.PropTypes.number.isRequired,
    imageUrl: React.PropTypes.string.isRequired
}

export default ImageSliderItem;
