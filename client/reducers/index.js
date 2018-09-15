//only one reducer is possible at a time. hence this file combines both 
//posts and comments using redux combineReducers capability.
//usually desirable reducer must be choosen based on aprpriate conditions as for every action, 
//all the reducers will be running.

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;