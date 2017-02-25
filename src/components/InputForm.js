import React from 'react';

class InputForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      "focused": false,
      "value": this.props.value
    };

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }

  focus() {
    this.setState({ "focused": true });
  }

  blur() {
    this.setState({ "focused": false });
  }

  render() {
    let style = {
      "width": this.props.width,
      "padding": this.props.padding + " 0px",
      "boxSizing": "border-box",
      "display": "inline-block",
      "marginRight": "0px",
      "verticalAlign": "bottom"
    };

    let titleStyle = {
      "fontSize": "0.8em",
      "textAlign": this.props.align
    };
    let blurredTitleStyle = Object.assign({}, titleStyle, {"color": "#A3A3A3"});
    let focusedTitleStyle = Object.assign({}, titleStyle, {"color": "#6C40BD"});

    let textStyle = {
      "width": "100%",
      "border": "none",
      "textAlign": this.props.align,
      "borderBottom": "1px solid #F5F5F5",
      "boxSizing": "border-box",
      "borderRadius": "0px",
      "color": this.props.color,
      "textIndent": "0px",
      "padding": "9px 0px 2px 0px",
      "fontSize": "1.2em",
      "fontWeight": this.props.bolder?"bold":"normal",
      "letterSpacing": this.props.letterSpacing
    };
    let blurredTextStyle = Object.assign({}, textStyle, {"borderBottom": "1px solid #F5F5F5"});
    let focusedTextStyle = Object.assign({}, textStyle, {"borderBottom": "1px solid #6C40BD"});

    return (
      <div style={style}>
        <div style={(!this.props.readOnly && this.state.focused) ? focusedTitleStyle : blurredTitleStyle}>{this.props.title}</div>
        <input type="text"
               name={this.props.name}
               onFocus={() => this.focus()}
               onBlur={() => this.blur()}
               onChange={(e) => this.setState({"value": e.target.value})}
               style={(!this.props.readOnly && this.state.focused) ? focusedTextStyle : blurredTextStyle}
               readOnly={this.props.readOnly ? "readOnly" : ""}
               value={this.state.value}
        />
      </div>
    );
  }
}

InputForm.defaultProps = {
  "name": "",
  "title": "",
  "width": "100%",
  "value": "",
  "readOnly": false,
  "align": "left",
  "color": "#000000",
  "bolder": false,
  "letterSpacing": "0em",
  "padding": "10px"
};

export default InputForm;
