import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { setAuthToken, setUserInfo } from '../actions/SessionAction';
import { getUserInfo } from '../modules/ApiModule';

class CallbackContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            token : args.params.session
        }
        this.props.onSetAuthToken(args.params.session);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        console.log(1);
        getUserInfo(this.state.token, (data) => {
            if(!!data) {
                this.props.onSetUserInfo(data.name, data.profileImage);
                browserHistory.push('/');
            }
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
        },
        onSetUserInfo: (username, profileImage) => {
            dispatch(setUserInfo(username, profileImage));
        }
    }
}

CallbackContainer = connect(mapStateToProps, mapDispatchToProps)(CallbackContainer);

export default CallbackContainer;
