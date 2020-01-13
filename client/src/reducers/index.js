import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import account from './account'
import auth from './auth';


export default combineReducers({
    account,
    auth,
    form: formReducer
});
