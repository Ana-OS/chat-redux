import { SET_MESSAGES } from '../actions'

const setMessages = (state=null, action) => {
    switch(action.type){
        case SET_MESSAGES:
            return action.payload.messages;
        default:
            return state;    
    }
}

export default setMessages;