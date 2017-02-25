import React from "react";
import FontAwesome from "react-fontawesome";
import ProfileImage from '../components/ProfileImage';

class CardInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          "cardNumber": ""
        };

        this.reformCardNumber = this.reformCardNumber.bind(this);
    }

    reformCardNumber(e) {
      let original = e.target.value.replace(/[^0-9]/g, '').substr(0, 16);
      let reformed = '';

      for(let i in original) {
        if(0 < i && i % 4 === 0) {
          reformed += '-';
        }

        reformed += original[i];
      }

      this.setState({"cardNumber": reformed});
    }

    render() {
      let style = {
        "textAlign": "justify"
      };

      let cardStyle = {
        "width": "90%",
        "boxSizing": "border-box",
        "backgroundColor": "#FFFFFF",
        "borderRadius": "9px",
        "padding": "60px 15px 15px 15px",
        "margin": "40px auto",
        "backgroundImage": "url('../assets/images/myc_title.png')",
        "backgroundSize": "30%",
        "backgroundPosition": "20px 20px",
        "backgroundRepeat": "no-repeat"
      };

      let cardNumberStyle = {
        "border": "none",
        "borderBottom": "1px solid #EFEFEF",
        "width": "100%",
        "margin": "auto",
        "display": "block",
        "fontSize": "1.5em",
        "boxSizing": "border-box",
        "fontWeight": "300",
        "padding": "0px",
        "textIndent": "0px",
        "textAlign": "center"
      };

      let cardDescStyle = {
        "fontSize": "0.7em",
        "color": "#999999"
      };

      let cardOwnerStyle = {
        "lineHeight": "2em",
        "fontSize": "0.8em",
        "marginTop": "15px"
      };

      let cardOwnerImageStyle = {
        "maxHeight": "2em",
        "maxWidth": "2em",
        "verticalAlign": "middle",
        "borderRadius": "2em"
      };

      let descStyle = {
        "paddingBottom": "60px",
        "textAlign": "center"
      };

      let descTitleStyle = {
        "fontStyle": "italic",
        "color": "#C9BBFD",
        "fontWeight": "bold"
      };

      let contentsStyle = {
        "fontSize": "0.8em",
        "color": "#C9BBFD"
      };
      let descContentsStyle = Object.assign({}, contentsStyle);
      let contactStyle = Object.assign({}, contentsStyle);

      let buttonStyle = {
        "position": "fixed",
        "left": "0px",
        "bottom": "0px",
        "width": "100%",
        "height": "3em",
        "border": "0px",
        "backgroundColor": "#fdf51e",
        "color": "#000000"
      };

      return (
        <div style={style}>
          <div style={cardStyle}>
            <input style={cardNumberStyle} type="text" onChange={this.reformCardNumber} placeholder="1111-2222-3333-4444" value={this.state.cardNumber} />
            <span style={cardDescStyle}>소지하고 계신 꿈나무 카드 번호를 입력해주세요.</span>
            <div style={cardOwnerStyle}>
              <img style={cardOwnerImageStyle} src="https://search.pstatic.net/common?type=o&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201606%2F20160623184934118.jpg" />
              김유빈
            </div>
          </div>

          <div style={descStyle}>
            <span style={descTitleStyle}>고루고루의 쪽지</span>
            <p style={descContentsStyle}>
              1. 고루고루는 골고루 먹으면 상주는 서비스입니다.<br />
              (안 먹는다고 벌을 주지는 않아요!)
            </p>
            <p style={descContentsStyle}>
              2. 고루고루는 진실된 사람을 좋아합니다. <br />
              (거짓말쟁이에게는 상을 줄 수 없어요)
            </p>
            <p style={descContentsStyle}>
              3. 고루고루는 사랑받는 것을 좋아해요.<br />
              (에피소드, 의견 등을 많이 보내주세요)
            </p>

            <p style={contactStyle}>
              Kakao ID : gorugoru<br />
              gorugoru@gorugoru.com
            </p>
          </div>

          <button style={buttonStyle}>카드 번호 저장</button>
        </div>
      );
    }
}

export default CardInfo;
