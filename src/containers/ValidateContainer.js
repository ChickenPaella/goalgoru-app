import React from 'react';
import Validate from '../components/Validate';
import { connect } from 'react-redux';
import { changeTitle, setActionBarOnlyBackward } from '../actions/NavigationAction';

class ValidateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          "height": props.height
        };
    }

    componentDidMount() {
        this.props.onChangeTitle("인증하기");
        this.props.setActionBar();

        this.setState({"height": window.innerHeight});
    }

    render() {
        let style = {
          "padding": "50px 20px 44px 20px",
          "backgroundColor": "#6C3AC0",
          "boxSizing": "border-box",
          "minHeight": this.state.height
        };

        return(
          <div style={style}>
            <Validate />
          </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        setActionBar: () => {
            dispatch(setActionBarOnlyBackward());
        }
    };
};

ValidateContainer = connect(undefined, mapDispatchToProps)(ValidateContainer);

export default ValidateContainer;
