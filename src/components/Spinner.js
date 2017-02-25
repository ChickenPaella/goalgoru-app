import React from 'react'
import { connect } from 'react-redux';

class Spinner extends React.Component {
    render() {
        let style = {
            width :"64px",
            height: "64px",
            position: "fixed",
            left: "50%",
            top: "50%",
            marginLeft:"-32px",
            marginTop:"-32px",
            zIndex: 1000,
        }

        return this.props.visible?<img src={"/assets/images/default.svg"} style={style} />:null
    }
}

let mapStateToProps = (state) => {
    return {
        visible: state.spinner.visible
    }
}

Spinner = connect(mapStateToProps, undefined)(Spinner);

export default Spinner;
