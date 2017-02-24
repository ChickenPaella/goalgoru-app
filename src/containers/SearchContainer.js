import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/NavigationAction';

class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.onChangeTitle("검색");
    }
    render() {
        return <div>
            <h1>Search</h1>
        </div>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch(changeTitle(title));
        }
    }
}

SearchContainer = connect(undefined, mapDispatchToProps)(SearchContainer);

export default SearchContainer;
