import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import quotesReducer from './quotes_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers ({
    form: formReducer,
    quote: quotesReducer,
    user: userReducer
});

export default rootReducer;