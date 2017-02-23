import React from 'react';

class Footer extends React.Component {
    render() {
        let style = {
            padding: "30px 28px",
            fontWeight: 300,
            color: "#000000",
            opacity: 0.2,
            fontSize: "14px"
        }
        return <div style={style}>
            <p>아동급식카드를 이용하는 아이들에게<br/>더 맛있고, 더 좋은 식당을 추천하고자 노력하는 우리는,</p>
            <h3>고루고루</h3>
        </div>
    }
}

export default Footer;
