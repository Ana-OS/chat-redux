import { SET_CHANNELS } from '../actions'

const channelReducer = (state = null, action) => {
    switch(action.type){
        case SET_CHANNELS:
            return action.payload;
        default:
            return state;    
    }
}

export default channelReducer