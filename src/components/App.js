import React from 'react';
import Navigation from './Navigation';
import AsideContainer from "../containers/AsideContainer";
import Dimmer from "./Dimmer";

class App extends React.Component {

    render(){
        return (
            <div>
                <Navigation />
                <AsideContainer />
                <Dimmer />
                {this.props.children}
            </div>
        );
    }
}

export default App;
