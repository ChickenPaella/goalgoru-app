import React from 'react';
import { changeTitle, setActionBarBackward, setActionBarHome, setActionBarTransparent } from '../actions/NavigationAction';
import { connect } from 'react-redux';
import DetailMenuList from '../components/DetailMenuList';
import DetailMenuPopup from '../components/DetailMenuPopup';

class DetailContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            id: args.params.id,
            below: false,
            name: "김밥천국 고루고루점",
            description: "한식 | 서울시 고루구 고루동",
            imageUrl: "http://pds27.egloos.com/pds/201212/27/12/c0055612_50dc4e569909d.jpg"
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
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
            backgroundImage: "url("+this.state.imageUrl+")"
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
            <DetailMenuList />
            <DetailMenuPopup visible={false} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
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
