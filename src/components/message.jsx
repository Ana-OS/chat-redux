import React, { Component } from 'react';


class Message extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.message.author}</h2>
                <p>{this.props.message.content}</p>
            </div>
        )
    }
}


export default Message;