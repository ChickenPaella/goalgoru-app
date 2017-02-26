import React from 'react';
import format from 'format-number';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { dimming, undimming } from '../actions/DimmerAction';
import { openPopup } from '../actions/PopupAction';
import { getNutriOfFood } from '../modules/ApiModule';

class DetailMenuItem extends React.Component {
    constructor(args) {
        super(args);
        this.openPopup = this.openPopup.bind(this);
    }

    openPopup() {
        getNutriOfFood(this.props.name, (data) => {
            if(!!data) {
                let payload = [data.carbo, data.carboPercent, data.protein, data.proteinPercent,
                    data.fat, data.fatPercent, data.fiber, data.kalium, data.natrium, data.calorie];
                this.props.onOpenPopup(data.name, payload);
            }
        });
    }

    render() {
        let style = {
            borderTop: "1px solid #efefef",
            padding: "22px 24px",
            height: "36px"
        }
        let textWrapperStyle = {
            float: "left",
            height: "100%"
        }
        let priceWrapperStyle = {
            float: "right",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "36px"
        }
        let priceStyle = {

        }
        let nameStyle = {
            fontSize: "18px",
            marginBottom: "2px",
            fontWeight: 300
        }
        let descriptionStyle = {
            fontSize: "14px"
        }
        let bestStyle = {
            position: "relative",
            top: "-1px",
            paddingLeft: "4px",
            fontSize: "15px",
            fontWeight: 500,
            color: "#FDF51E"
        }
        return <li style={style} onClick={this.openPopup}>
            <div style={textWrapperStyle}>
                <div style={nameStyle}>{this.props.name}<span style={bestStyle}>{this.props.best?"BEST":""}</span></div>
                <div style={descriptionStyle}><span>{this.props.type}</span>&nbsp;|&nbsp;<span>{this.props.calorie}kcal</span></div>
            </div>
            <div style={priceWrapperStyle}>
                <FontAwesome name="krw" /><span style={priceStyle}>&nbsp;{format()(this.props.price)}</span>
            </div>
        </li>
    }
}

let mapStateToProps = () => {
    return {

    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onOpenPopup: (title, content) => {
            dispatch(dimming());
            dispatch(openPopup(title, content));
        }
    }
}

DetailMenuItem = connect(mapStateToProps, mapDispatchToProps)(DetailMenuItem);

export default DetailMenuItem;
