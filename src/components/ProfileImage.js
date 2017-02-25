import React from 'react';

class ProfileImage extends React.Component {
    render() {
        const style = {
            backgroundPoisition: "center",
            backgroundSize: "cover",
            backgroundImage: "url("+this.props.imageUrl+")",
            width: "92px",
            height: "92px",
            margin: "56px auto 8px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(88, 54, 201)",
            borderRadius: "999px"
        }
        let imageStyle = {
            minWidth: "120px",
            minHeight: "120px",
            opacity: 0
        }
        return <div style={style}>
            <img style={imageStyle} src={this.props.imageUrl} />
        </div>
    }
}

ProfileImage.propTypes = {
    imageUrl: React.PropTypes.string.isRequired
}

export default ProfileImage;
