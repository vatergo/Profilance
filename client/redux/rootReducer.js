import { combineReducers } from 'redux';
import { newsReducer } from './newsReduser'
import { authReducer } from './authReduser';

export const rootReducer = combineReducers({
    auth: authReducer,
    news: newsReducer,
});