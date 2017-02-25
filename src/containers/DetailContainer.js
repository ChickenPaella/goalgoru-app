import React from 'react';
import { changeTitle, setActionBarBackward, setActionBarHome, setActionBarTransparent, setMapLink } from '../actions/NavigationAction';
import { connect } from 'react-redux';
import DetailMenuList from '../components/DetailMenuList';
import DetailMenuPopup from '../components/DetailMenuPopup';
import { getRestaurantDetail } from '../modules/ApiModule';

class DetailContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            id: args.params.id,
            menus: []
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        getRestaurantDetail(this.state.id, (data) => {
            if(!!data) {
                let newState =  {
                    mapUrl : "http://map.daum.net/link/map/"+encodeURIComponent(data.name)+","+data.location.latitude+","+data.location.longitude,
                    name: data.name,
                    description: data.category + "|" + data.address,
                    menus: data.foods
                }
                this.setState(newState);
                this.props.onSetMap(newState.mapUrl);
            }
        });
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
        this.props.onInit();
    }


    componentWillUnmount() {
        this.props.onSetActionBarTransparent(false);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        let offset = 210 - 50;  // ImageHeight - NaviHeight
        if((e.target.scrollingElement.scrollTop > offset) && !this.state.below ) {
            this.setState({below: true});
            this.props.onSetActionBarTransparent(false);
            this.props.onChangeTitle(this.state.name);
        } else if((e.target.scrollingElement.scrollTop <= offset) && this.state.below ) {
            this.setState({below: false});
            this.props.onSetActionBarTransparent(true);
            this.props.onChangeTitle("");
        }
    }

    render() {
        let style = {
            position: 'relative'
        }
        let imageWrapperStyle = {
            position: "relative",
            height: "210px",
            zIndex: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url(/assets/images/dummy0.png)"
        }
        let imageDimmerStyle = {
            backgroundColor: "#000000",
            opacity: "0.4",
            width: "100%",
            height: "100%"
        }
        let titleStyle = {
            position: "relative",
            left: "-4px",
            fontSize: "28px",
            fontStyle: "italic",
        }
        let descriptionStyle = {
            fontSize: "13px",
            paddingTop: "4px",
            fontWeight: 300
        }
        let textWrapperStyle = {
            position: "absolute",
            bottom: "18px",
            left: "24px",
            color: "#FFFFFF"
        }
        return <div style={style}>
            <div style={imageWrapperStyle}>
                <div style={imageDimmerStyle}></div>
                <div style={textWrapperStyle}>
                    <div style={titleStyle}>{this.state.name}</div>
                    <div style={descriptionStyle}>{this.state.description}</div>
                </div>
            </div>
            <DetailMenuList menus={this.state.menus} />
            <DetailMenuPopup visible={false} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetMap: (mapUrl) => {
            dispatch(setMapLink(mapUrl));
        },
        onInit: () => {
            dispatch(changeTitle(""));
            dispatch(setActionBarTransparent(true));
            dispatch(setActionBarBackward());
        },
        onSetActionBarBackward: () => {
            dispatch(setActionBarBackward());
        },
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        onSetActionBarTransparent: (transparent) => {
            dispatch(setActionBarTransparent(transparent));
        }
    }
};


DetailContainer = connect(mapStateToProps, mapDispatchToProps)(DetailContainer);


export default DetailContainer;
