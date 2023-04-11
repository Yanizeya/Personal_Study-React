import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
createStore(function(state, action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state;
}, composeWithDevTools());
export default createStore;
