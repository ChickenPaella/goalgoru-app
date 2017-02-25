import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import MainContainer from './containers/MainContainer';
import RewardContainer from './containers/RewardContainer';
import MyPageContainer from './containers/MyPageContainer';
import SearchContainer from './containers/SearchContainer';
import LocationContainer from './containers/LocationContainer';
import DetailContainer from './containers/DetailContainer';
import ValidateContainer from './containers/ValidateContainer';
import CardInfoContainer from './containers/CardInfoContainer';
import CallbackContainer from './containers/CallbackContainer';
import AppReducer from './reducers/AppReducer';

let store = createStore(AppReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContainer} />
                <Route path="/my" component={MyPageContainer} />
                <Route path="/reward" component={RewardContainer} />
                <Route path="/search" component={SearchContainer} />
                <Route path="/location" component={LocationContainer} />
                <Route path="/detail/:id" component={DetailContainer} />
                <Route path="/validate" component={ValidateContainer} />
                <Route path="/card" component={CardInfoContainer} />
                <Route path="/api/session/:session" component={CallbackContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
