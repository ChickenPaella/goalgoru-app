import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { changeTitle } from '../actions/NavigationAction';

class LocationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: "경기도 성남시 수정구",
            list: [
                {id:1, name:"성남시 수정구 수진동", selected:false},
                {id:2, name:"성남시 수정구 태평동", selected:false},
                {id:3, name:"성남시 수정구 신흥동", selected:false},
                {id:4, name:"성남시 중원구 성남동", selected:false},
                {id:5, name:"성남시 중원구 하대원동", selected:false},
            ]
        };
    }

    componentDidMount() {
        this.props.onChangeTitle("위치설정");
    }

    toggleItem = (text, index) => {
        let list = this.state.list;
        list[index].selected = !list[index].selected;
        this.setState({list: list});
    }

    render() {
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

        return <div>
            <div style={currentLocationStyle}>현재위치 : {this.state.currentLocation}</div>
            <ul style={listStyle}>
                {this.state.list.map((location, index) => {
                    return (
                        <li style={listItemStyle} key={location.id} selected={location.selected} onClick={this.toggleItem.bind(this, location, index)}>{location.name}
                            {location.selected?<FontAwesome name="check" style={checkStyle} />:null}
                        </li>
                    )
                })}
            </ul>
        </div>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title))
        }
    };
};

LocationContainer = connect(undefined, mapDispatchToProps)(LocationContainer);

export default LocationContainer;
