import { combineReducers } from 'redux';
import numberReducer from './numberReducer';

const indexReducer = combineReducers({
    numberReducer,
    // reducer 2,
    // reducer 3,
    // ...
})

export default indexReducer;