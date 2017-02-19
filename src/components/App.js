import React from 'react';
import Navigation from './Navigation';
import AsideContainer from "../containers/AsideContainer";
import Dimmer from "./Dimmer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "고루고루"
        }
    }

    render(){
        return (
            <div>
                <Navigation title={this.state.title} />
                <AsideContainer />
                <Dimmer />
                {this.props.children}
            </div>
        );
    }
}

export default App;
