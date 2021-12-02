import {SET_USER} from '../actions';

const currentUser = (state, action) => {
    if(state == undefined){
        return null
    }

    switch(action.type){
        case SET_USER:
            return action.payload;
        default:
            return state;

    }
} 

export default currentUser