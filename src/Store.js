import { createStore,combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import User from './Reducers/Users';
import Settings from './Reducers/Settings';
import Theme from './Reducers/Theme';

export default createStore(combineReducers({
    User,Settings,Theme
}), {}, applyMiddleware(thunk, promise));