import React from 'react';
import ImageSliderItem from './ImageSliderItem';

class ImageSlider extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            runnable: undefined,
            active: 0,
            images: [
                {imageUrl: "http://cfile5.uf.tistory.com/image/224E8F3E57148F7A0E43B5"},
                {imageUrl: "http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2015/01/2015012014020420999-540x360.jpg"},
                {imageUrl: "https://i.ytimg.com/vi/RPf-_DPqEpQ/maxresdefault.jpg"},
            ]
        }
    }

    componentDidMount() {
        let runnable = setInterval(() => {this.iterator();}, 5000);
        this.setState({runnable: runnable});
    }

    componentWillUnmount() {
        clearInterval(this.state.runnable);
    }

    iterator() {
        const slideSize = this.state.images.length;
        let next = (this.state.active + 1) % slideSize;
        this.setState({ active: next });
    }


    render() {
        let style = {
            position: "relative"
        }
        let imageWrapperStyle = {
            margin: "12px 0 0",
            height: "200px",
            padding: 0,
        }
        let indicatorWrapper = {
            position: "absolute",
            bottom: "12px",
            left: "18px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            zIndex: 101
        }
        let indicator = {
            float: "left",
            margin: "2px",
            width: "6px",
            height: "6px",
            borderRadius: "9999px",
            border: "1px solid #ffffff",
            // backgroundColor: "#ffffff"
        }
        let indicatorActive = {
            float: "left",
            margin: "2px",
            width: "6px",
            height: "6px",
            borderRadius: "9999px",
            border: "1px solid #ffffff",
            backgroundColor: "#ffffff"
        }

        return <div style={style}>
            <ul style={imageWrapperStyle}>
                {this.state.images.map((image, index) => {
                    return <ImageSliderItem key={index} imageUrl={image.imageUrl} active={index==this.state.active}/>
                })}
            </ul>
            <ul style={indicatorWrapper}>
                {this.state.images.map((image, index) => {
                    return <li key={index} style={index==this.state.active?indicatorActive:indicator}></li>
                })}
            </ul>
        </div>
    }
}

export default ImageSlider;
