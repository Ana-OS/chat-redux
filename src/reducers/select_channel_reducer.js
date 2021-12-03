import { SELECT_CHANNEL } from '../actions'

const selectChannel = (state = null, action) => {
    switch(action.type){
        case SELECT_CHANNEL:
            return action.payload;
        default:
            return state;    
    }
}

export default selectChannel;