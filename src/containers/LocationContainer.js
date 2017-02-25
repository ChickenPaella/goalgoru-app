import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { changeTitle, setActionBarOnlyBackward } from '../actions/NavigationAction';
import { setLocation } from '../actions/SearchAction';

class LocationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: "경기도 성남시 수정구",
            list: [
                {region: "서울특별시 은평구 녹번동"},
                {region: "서울특별시 은평구 불광1동"},
                {region: "서울특별시 은평구 불광2동"},
                {region: "서울특별시 은평구 갈현1동"},
                {region: "서울특별시 은평구 갈현2동"},
                {region: "서울특별시 은평구 구산동"},
                {region: "서울특별시 은평구 대조동"},
                {region: "서울특별시 은평구 응암1동"},
                {region: "서울특별시 은평구 응암2동"},
                {region: "서울특별시 은평구 응암3동"},
                {region: "서울특별시 은평구 역촌동"},
                {region: "서울특별시 은평구 역촌동"},
                {region: "서울특별시 은평구 신사1동"},
                {region: "서울특별시 은평구 신사2동"},
                {region: "서울특별시 은평구 증산동"},
                {region: "서울특별시 은평구 수색동"},
                {region: "서울특별시 은평구 진관동"}
            ]
        };
    }

    componentDidMount() {
        this.props.onChangeTitle("위치설정");
        this.props.onSetActionBarOnlyBackward();
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
            backgroundColor: "#cccccc"
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
            <div style={currentLocationStyle}>현재위치 : {this.state.currentLocation}</div>
            <ul style={listStyle}>
                {this.state.list.map((location, index) => {
                    return (
                        <li style={listItemStyle} key={index} onClick={() => {this.props.onSetLocation(location.region); browserHistory.push('/');}}>{location.region}</li>
                    )
                })}
            </ul>
        </div>
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarOnlyBackward: () => {
            dispatch(setActionBarOnlyBackward());
        },
        onSetLocation: (region) => {
            dispatch(setLocation(region));
        }
    };
};

LocationContainer = connect(undefined, mapDispatchToProps)(LocationContainer);

export default LocationContainer;
