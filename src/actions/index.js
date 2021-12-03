// TODO: add and export your own actions

export const SET_MESSAGES = 'SET_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';


export async function setMessages(channel){
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const promise = fetch(url).then(data => data.json())
    return {
        type: SET_MESSAGES,
        payload: promise
    }
}

export async function createMessage(channel, author, content) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const body = { author, content };
    // console.log(body)
    const promise = fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }).then(r => r.json());
    return {
        type: MESSAGE_POSTED,
        payload: promise // Will be resolved by redux-promise
      };

}

export function selectChannel(channel) {
    return {
      type: SELECT_CHANNEL,
      payload: channel
    };
  }
  