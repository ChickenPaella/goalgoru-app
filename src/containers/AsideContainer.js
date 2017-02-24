import React from 'react';
import { connect } from 'react-redux';
import AsideMenu from '../components/AsideMenu';
import ProfileImage from '../components/ProfileImage';
import { closeAside } from '../actions/AsideAction';
import { undimming } from '../actions/DimmerAction';

class AsideContainer extends React.Component {
    render() {
        let style = {
            width: "280px",
            height: "100%",
            position: "fixed",
            left: "0px",
            top: "0px",
            zIndex: "1000",
            backgroundColor: "#ffffff",
            borderWidth: "0px 1px 0px 0px",
            borderStyle: "solid",
            borderColor: "#888888"
        }

        let closeButtonStyle = {
            position: "absolute",
            right: "0px",
            top: "0px",
            padding: "12px 16px",
            color: "#888888",
            textDecoration: "none"
        }

        return this.props.active?<div style={style}>
            <a style={closeButtonStyle} onClick={this.props.onCloseAside}>닫기</a>
            <ProfileImage imageUrl="https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201606%2F20160623184934118.jpg" />
            <AsideMenu />
        </div>:null;
    }
}

let mapStateToProps = (state) => {
    return {
        active: state.aside.visible
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        onCloseAside: () => {
            dispatch(undimming());
            dispatch(closeAside());
        }
    };
};

AsideContainer = connect(mapStateToProps, mapDispatchToProps)(AsideContainer);

export default AsideContainer;
