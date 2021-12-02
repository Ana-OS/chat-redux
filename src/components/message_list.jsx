import React, { Component } from 'react';
import Message from './message';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { setMessages } from '../actions';



class MessageList extends Component{
    componentWillMount(){
        this.props.setMessages("general")
    }

    render() {
        return(
            <div className="message-list">
                 {this.props.messages.map(message => <Message message={message} key={message.created_at}/>)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { setMessages: setMessages},
        dispatch
    );
}

function mapStateToProps(state){
    return {
        messages: state.messageList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)