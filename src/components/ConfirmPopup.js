import React from 'react';
import { undimming } from '../actions/DimmerAction';

class ConfirmPopup extends React.Component {
    constructor(args) {
        super(args);
    }
    let style = {}
    render() {
        return <div style={style}>
            <div stype={messageStype}></div>
            <div style={buttonWrapperStype}>
            </div>
        </div>
    }
}


let mapDispatchToPros = (dispatch) => {
    return {
        onUndimming: () => {
            dispatch(undimming());
        }
    }
}


export default ConfirmPopup;
