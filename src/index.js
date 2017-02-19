import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import MainContainer from './containers/MainContainer';
import PointContainer from './containers/PointContainer';
import RewardContainer from './containers/RewardContainer';
import AppReducer from './reducers/AppReducer';
import DimmerReducer from './reducers/DimmerReducer';

let store = createStore(AppReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContainer} />
                <Route path="point" component={PointContainer} />
                <Route path="reward" component={RewardContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)
