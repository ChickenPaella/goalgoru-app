import React from 'react';
import ImageSliderItem from './ImageSliderItem';

class ImageSlider extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            runnable: undefined,
            active: 0,
            images: [
                {id:1, title:"맑은 낙지탕", subtitle:"오늘은 낙지로 단백질을 낚지", imageUrl: "/assets/images/home_ban_img01.png", },
                {id:2, title:"인삼 닭죽", subtitle:"단백은 닭죽을 받으라", imageUrl: "/assets/images/home_ban_img02.png"},
                {id:3, title:"전주 비빔밥", subtitle:"단백질을 위한 비빔!", imageUrl: "/assets/images/home_ban_img03.png"},
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
            bottom: "24px",
            left: "29px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            zIndex: 101
        }
        let indicator = {
            float: "left",
            margin: "2px",
            width: "5px",
            height: "5px",
            borderRadius: "9999px",
            border: "1px solid #ffffff",
            // backgroundColor: "#ffffff"
        }
        let indicatorActive = {
            float: "left",
            margin: "2px",
            width: "5px",
            height: "5px",
            borderRadius: "9999px",
            border: "1px solid #ffffff",
            backgroundColor: "#ffffff"
        }

        return <div style={style}>
            <ul style={imageWrapperStyle}>
                {this.state.images.map((image, index) => {
                    return <ImageSliderItem key={index} id={image.id} title={image.title} subtitle={image.subtitle} imageUrl={image.imageUrl} visible={index==this.state.active?true:false}/>
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
