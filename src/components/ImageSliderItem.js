import React from 'react';
import { Link } from 'react-router';

class ImageSliderItem extends React.Component {

    render() {
        let style = {
            position: "absolute",
            backgroundPoisition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "200px",
            backgroundImage: "url("+this.props.imageUrl+")",
            overflow: "hidden"
        }

        if(this.props.active) {
            style.zIndex = 100
        }

        let imageStyle = {
            minHeight: "200px",
            opacity: 0
        }
        return <li style={style}>
            <Link to={"/detail/"+this.props.id}>
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
