import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthToken } from '../actions/SessionAction';
import { getUserList } from '../modules/ApiModule';

class CallbackContainer extends React.Component {
    constructor(args) {
        super(args);
        this.props.onSetAuthToken(args.params.session);
    }

    componentDidMount() {
        getUserList(this.props.token, (data) => {
            console.log(data);
        });
    }

    render() {
        let style = {
            paddingTop: "50px"
        }
        return <div style={style}><h1>{this.props.token}</h1></div>
    }
}

let mapStateToProps = (state) => {
    return {
        token: state.session.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSetAuthToken: (token) => {
            dispatch(setAuthToken(token));
        }
    }
}

CallbackContainer = connect(mapStateToProps, mapDispatchToProps)(CallbackContainer);

export default CallbackContainer;
