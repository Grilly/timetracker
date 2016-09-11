import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import days from './days';
import tracks from './tracks';

const rootReducer = combineReducers({ days, tracks, routing: routerReducer });

export default rootReducer;
