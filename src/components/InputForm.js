import React from 'react';

class InputForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      "focused": false
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
      "padding": "10px",
      "boxSizing": "border-box",
      "display": "inline-block"
    };

    let titleStyle = {
      "fontSize": "0.8em"
    };

    let focusedTitleStyle = {
      "fontSize": "0.8em",
      "color": "#6C40BD"
    };

    let textStyle = {
      "width": "100%",
      "border": "none",
      "borderBottom": "2px solid #EFEFEF"
    };

    let focusedTextStyle = {
      "width": "100%",
      "border": "none",
      "borderBottom": "2px solid #6C40BD"
    };

    return (
      <div style={style}>
        <div style={(!this.props.readOnly && this.state.focused) ? focusedTitleStyle : titleStyle}>{this.props.title}</div>
        <input type="text"
               name={this.props.name}
               onFocus={() => this.focus()}
               onBlur={() => this.blur()}
               style={(!this.props.readOnly && this.state.focused) ? focusedTextStyle : textStyle}
               readOnly={this.props.readOnly ? "readOnly" : ""}
               value={(this.props.value !== "") ? this.props.value : ""}
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
  "readOnly": false
};

export default InputForm;
