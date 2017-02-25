import React from 'react';

class Footer extends React.Component {
    render() {
        let style = {
            padding: "30px 34px 50px",
            fontWeight: 700,
            color: "#000000",
            fontSize: "13px",
            color: "#c8c317"
        }
        let imgStyle = {
            width: "65px"
        }
        return <div style={style}>
            <p>하늘부터 땅까지<br/>영양소가 진자 운동을 하였다. 고루고루였다.</p>
            <img style={imgStyle} src="/assets/images/home_logo.png"/>
        </div>
    }
}

export default Footer;
