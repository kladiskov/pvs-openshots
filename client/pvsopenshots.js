import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

//for the root '/' (home page),  route to main component and
//depending on the url, either pass PhotoGrid or Single (Both are children of main component).
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Photogrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
