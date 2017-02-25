import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { changeTitle, setActionBarOnlyBackward } from '../actions/NavigationAction';
import { setLocation } from '../actions/SearchAction';
import { dimming, undimming } from '../actions/DimmerAction';
import { getRegionByGeoPosition } from '../modules/ApiModule';
import { showSpinner, hideSpinner } from '../actions/SpinnerAction';
import { getGeoPositionByRegion } from '../modules/ApiModule';

class LocationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {region: "서울특별시 은평구 녹번동", latitude:"37.605225", longitude:"126.9255449"},
                {region: "서울특별시 은평구 불광1동", latitude:"37.6125048", longitude:"126.9278676"},
                {region: "서울특별시 은평구 불광2동", latitude:"37.6207241", longitude:"126.9232765"},
                {region: "서울특별시 은평구 갈현1동", latitude:"37.6246787", longitude:"126.9090486"},
                {region: "서울특별시 은평구 갈현2동", latitude:"37.6172607", longitude:"126.9074983"},
                {region: "서울특별시 은평구 구산동", latitude:"37.6117598", longitude:"126.8999045"},
                {region: "서울특별시 은평구 대조동", latitude:"37.612621", longitude:"126.9198649"},
                {region: "서울특별시 은평구 응암1동", latitude:"37.5978855", longitude:"126.9224471"},
                {region: "서울특별시 은평구 응암2동", latitude:"37.5916992", longitude:"126.9192102"},
                {region: "서울특별시 은평구 응암3동", latitude:"37.5893046", longitude:"126.9135215"},
                {region: "서울특별시 은평구 역촌동", latitude:"37.6049235", longitude:"126.9077125"},
                {region: "서울특별시 은평구 신사1동", latitude:"37.5984534", longitude:"126.903916"},
                {region: "서울특별시 은평구 신사2동", latitude:"37.5936342", longitude:"126.9025686"},
                {region: "서울특별시 은평구 증산동", latitude:"37.5833062", longitude:"126.901740"},
                {region: "서울특별시 은평구 수색동", latitude:"37.5850342", longitude:"126.8840935"},
                {region: "서울특별시 은평구 진관동", latitude:"37.6411844", longitude:"126.9186352"}
            ]
        };
        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount() {
        this.props.onChangeTitle("위치설정");
        this.props.onSetActionBarOnlyBackward();
    }

    getLocation() {
        if(("geolocation" in navigator)) {
            this.props.onDimming();
            navigator.geolocation.getCurrentPosition((pos) => {
                let latitude = pos.coords.latitude;
                let longitude = pos.coords.longitude;
                getRegionByGeoPosition(latitude, longitude, (data) => {
                    if(!!data) {
                        this.props.onSetAutoLocation(data.sido+" "+ data.sigugun +" "+ data.dong, latitude, longitude);
                    }
                    this.props.onBackToHome();
                });
            });
        }
    }

    render() {
        let style = {
            paddingTop: "50px"
        }
        let currentLocationStyle = {
            textAlign: "center",
            padding: "8px 0",
            fontSize: "13px",
            color: "#ffffff",
            backgroundColor: "#6C3AC0",
            fontWeight: 300
        }
        let listStyle = {
            listStyle: "none",
            margin: 0,
            padding: 0
        }
        let listItemStyle = {
            padding: "20px 24px 16px",
            borderBottom: "1px solid #dddddd"
        }
        let checkStyle = {
            float: "right",
            fontSize: "18px"
        }

        return <div style={style}>
            <div style={currentLocationStyle}>현재위치 : {this.props.currentLocation}</div>
            <div style={listItemStyle} onClick={this.getLocation}>현재 내 위치로 검색</div>
            <ul style={listStyle}>
                {this.state.list.map((location, index) => {
                    return (
                        <li style={listItemStyle} key={index} onClick={() => {
                            this.props.onSetManualLocation(location.region, location.latitude, location.longitude);
                            browserHistory.push('/');
                        }}>{location.region}</li>
                    )
                })}
            </ul>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        currentLocation: state.search.location,
        tracking: state.search.tracking
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onDimming: () => {
            dispatch(showSpinner());
            dispatch(dimming());
        },
        onBackToHome: () => {
            dispatch(hideSpinner());
            dispatch(undimming());
            browserHistory.push('/');
        },
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarOnlyBackward: () => {
            dispatch(setActionBarOnlyBackward());
        },
        onSetAutoLocation: (location, latitude, longitude) => {
            dispatch(setLocation(location, true, latitude, longitude));
        },
        onSetManualLocation: (location, latitude, longitude) => {
            dispatch(setLocation(location, false, latitude, longitude));
        }
    };
};

LocationContainer = connect(mapStateToProps, mapDispatchToProps)(LocationContainer);

export default LocationContainer;
