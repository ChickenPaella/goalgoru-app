import React from 'react';
import { connect } from 'react-redux';

class Dimmer extends React.Component {
    render() {
        let style = {
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "fixed",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            zIndex: 999,
            display: this.props.dimmed?"block":"none"
        }

        return this.props.dimmed?<div style={style}></div>:null
    }
}

let mapStateToProps = (state) => {
    // console.log(state);
    return {
        dimmed: state.dimmer.dimmed
    };
};

Dimmer = connect(mapStateToProps)(Dimmer);

export default Dimmer;
