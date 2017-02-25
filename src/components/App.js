import React from 'react';
import Navigation from './Navigation';
import AsideContainer from "../containers/AsideContainer";
import Dimmer from "./Dimmer";

class App extends React.Component {

    render(){
        let style = {
            position: "relative",
            maxWidth: "420px",
            margin: "0 auto"
        }
        return (
            <div style={style}>
                <Navigation />
                <AsideContainer />
                <Dimmer />
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default App;
