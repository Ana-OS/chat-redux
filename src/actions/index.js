// TODO: add and export your own actions

export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_USER = 'SET_USER';
export const SET_MESSAGES = 'SET_MESSAGES';


export function setChannels(){

    
};

export function setUser(){

};

export async function setMessages(channel){
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

    return fetch(url)
        .then(data => data.json())
        .then( data => {
            return {
                type: SET_MESSAGES,
                payload: data.messages
            }
        })
}

export function createMessage(channel, author, content) {
    // TODO
}