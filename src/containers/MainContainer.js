import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';
import { setLocation } from '../actions/SearchAction';
import ImageSlider from '../components/ImageSlider';
import MenuList from '../components/MenuList';

class MainContainer extends React.Component {
    constructor(args) {
        super(args);
        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount() {
        this.props.onChangeTitle("고루고루");
        this.props.onSetActionBarBase();
        this.getLocation();
    }

    getLocation() {
        if("geolocation" in navigator) {
            // this.props.onSetLocation();
            navigator.geolocation.getCurrentPosition((pos) => {
                // console.log(pos.coords.latitude);
                // console.log(pos.coords.longitude);
            });
        }
    }

    render() {
        let style = {
            paddingTop: "50px",
            backgroundColor: "#6C3AC0"
        }
        let linkWrapperStyle = {
            padding: "8px 18px 4px"
        }

        let linkStyle = {
            backgroundColor: "#5B2FA6",
            borderRadius: "4px",
            padding: "7px 0px 6px",
            display: "block",
            textAlign: "center",
            color: "#ffffff",
            textDecoration:"none",
            fontWeight: "300",
            fontSize: "14px"
        }

        return <div style={style}>
            <div style={linkWrapperStyle}>
                <Link to='location' style={linkStyle}><FontAwesome name="map-marker" />&nbsp;&nbsp;{this.props.location}</Link>
            </div>
            <ImageSlider />
            <MenuList />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        location: state.search.location
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarBase: () => {
            dispatch(setActionBarBase());
        },
        onSetLocation: (loc) => {
            dispatch(setLocation(loc));
        }
    };
};

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainContainer;
