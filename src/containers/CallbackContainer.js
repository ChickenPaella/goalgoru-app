import React from 'react';
import axios from 'axios';

class CallbackContainer extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            session: args.params.session
        };
        // document.cookie='JSESSIONID='+this.state.session;
    }
    componentDidMount() {
        let getLocation = () => {
            let config = {
                baseURL: "http://goalgoru.com:8080",
                timeout: 10000,
                // headers: {"Cookie": "JSESSIONID="+this.state.state}
            };

            let instance = axios.create(config);
            console.log(instance);

            // instance.get("/api/rsnt/list/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EB%B6%88%EA%B4%91%EB%8F%99/%ED%95%9C%EC%8B%9D").then(response => {
            instance.get("/api/user/list").then(response => {
               console.log(response);
            });
        }
        getLocation();
    }
    render() {
        let style = {
            paddingTop: "50px"
        }
        return <div style={style}><h1>{this.state.session}</h1></div>
    }
}

export default CallbackContainer;
