import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';
import { setLocation, getRestaurantList } from '../actions/SearchAction';
import ImageSlider from '../components/ImageSlider';
import MenuList from '../components/MenuList';
import { getRegionByGeoPosition, getRestaurantListByGeoPosition } from '../modules/ApiModule';
import { dimming, undimming } from '../actions/DimmerAction';
import { showSpinner, hideSpinner } from '../actions/SpinnerAction';

class MainContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            latitude: undefined,
            longitude: undefined,
            list: []
        }
        this.getLocation = this.getLocation.bind(this);
        this.getList = this.getList.bind(this);
    }

    componentDidMount() {
        this.props.onChangeTitle("고루고루");
        this.props.onSetActionBarBase();
        this.getLocation();
        this.getList();
    }

    getList() {
        this.props.onLoadingStart();
        getRestaurantListByGeoPosition(this.props.latitude, this.props.longitude, (data) => {
            if(!!data) {
                this.props.onGetRestaurantList(data);
            }
            this.props.onLoadingEnd();
        });
    }

    getLocation() {
        if(("geolocation" in navigator && this.props.tracking)) {
            navigator.geolocation.getCurrentPosition((pos) => {
                let latitude = pos.coords.latitude;
                let longitude = pos.coords.longitude;
                getRegionByGeoPosition(latitude, longitude, (data) => {
                    if(!!data) {
                        this.props.onSetAutoLocation(data.sido+" "+ data.sigugun +" "+ data.dong, latitude, longitude);
                    }
                });
            });
        }
    }

    render() {
        let style = {
            paddingTop: "50px",
            backgroundColor: "#5836c9"
        }
        let linkWrapperStyle = {
            padding: "8px 18px 4px"
        }

        let linkStyle = {
            backgroundColor: "#492bae",
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
        tracking: state.search.tracking,
        latitude: state.search.latitude,
        longitude: state.search.longitude
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetRestaurantList(list) {
            dispatch(getRestaurantList(list));
        },
        onLoadingStart: () => {
            dispatch(dimming());
            dispatch(showSpinner());
        },
        onLoadingEnd: () => {
            dispatch(undimming());
            dispatch(hideSpinner());
        },
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarBase: () => {
            dispatch(setActionBarBase());
        },
        onSetAutoLocation: (location, latitude, longitude) => {
            dispatch(setLocation(location, true, latitude, longitude));
        }
    };
};

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainContainer;
