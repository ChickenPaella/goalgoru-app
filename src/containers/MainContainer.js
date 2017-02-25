import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';
import { setLocation } from '../actions/SearchAction';
import ImageSlider from '../components/ImageSlider';
import MenuList from '../components/MenuList';
import { getRegionByGeoPosition } from '../module/ApiModule';

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
        if(("geolocation" in navigator) && this.props.tracking) {
            navigator.geolocation.getCurrentPosition((pos) => {
                getRegionByGeoPosition(pos.coords.latitude, pos.coords.longitude, (data) => {
                    if(!!data) {
                        this.props.onSetAutoLocation(data.sido+" "+ data.sigugun +" "+ data.dong);
                    }
                });
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
                <Link to='location' style={linkStyle}>{this.props.location}</Link>
            </div>
            <ImageSlider />
            <MenuList />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        location: state.search.location,
        tracking: state.search.tracking
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
        onSetAutoLocation: (location) => {
            dispatch(setLocation(location, true));
        }
    };
};

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainContainer;
