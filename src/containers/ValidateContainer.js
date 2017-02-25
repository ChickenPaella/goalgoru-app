import React from 'react';
import Validate from '../components/Validate';
import { connect } from 'react-redux';
import { changeTitle, setActionBarOnlyBackward } from '../actions/NavigationAction';

class ValidateContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onChangeTitle("인증하기");
    }

    render() {
        let style = {
          "paddingTop": "50px",
          "backgroundColor": "#6C3AC0"
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
            dispatch(setActionBarOnlyBackward());
        }
    };
};

ValidateContainer = connect(undefined, mapDispatchToProps)(ValidateContainer);

export default ValidateContainer;
