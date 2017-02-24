import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { changeTitle, setActionBarBase } from '../actions/NavigationAction';
import ImageSlider from '../components/ImageSlider';
import MenuList from '../components/MenuList';

class MainContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            locationName: "서울시 노원구 동원로"
        };
    }
    
    componentDidMount() {
        this.props.onChangeTitle("고루고루");
        this.props.onSetActionBarBase();
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
                <Link to='location' style={linkStyle}><FontAwesome name="map-marker" />&nbsp;&nbsp;{this.state.locationName}</Link>
            </div>
            <ImageSlider />
            <MenuList />
        </div>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarBase: () => {
            dispatch(setActionBarBase());
        }
    };
};

MainContainer = connect(undefined, mapDispatchToProps)(MainContainer);

export default MainContainer;
