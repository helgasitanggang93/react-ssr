import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import authReducer from './authReducer';
import adminsReducer from './adminReducer';

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
})