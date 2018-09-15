//only one reducer is possible at a time. hence this file combines both 
//posts and comments using redux combineReducers capability.

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;