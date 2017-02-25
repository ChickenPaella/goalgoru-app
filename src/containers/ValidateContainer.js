import React from 'react';
import Validate from '../components/Validate';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class ValidateContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onChangeTitle("인증하기");
    }

    render() {
        let style = {
          "marginTop": "50px"
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
        }
    };
};

ValidateContainer = connect(undefined, mapDispatchToProps)(ValidateContainer);

export default ValidateContainer;
