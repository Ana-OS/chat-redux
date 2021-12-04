import React, { Component } from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { setMessages } from '../actions';
import MessageForm from '../containers/message_form';




class MessageList extends Component{

    componentWillMount() {
        this.getTheMessages();
    }
    componentDidMount() {
        this.refresher = setInterval(this.getTheMessages, 3000);
    } 
    componentWillUnmount() {
        clearInterval(this.refresher);
    }

    getTheMessages = () => {
        this.props.setMessages("general")
    }

    render() {
        return(
            <div className="channel-container">
                <div className="channel-title">
                    <span>Channel #{this.props.selectedChannel}</span>
                </div>
                <div className="channel-content" ref={(list) => { this.list = list; }}>
                    {this.props.messages.map(message => <Message message={message} key={message.created_at}/>)}
                </div>
                < MessageForm />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        messages: state.messageList,
        selectedChannel: state.selectedChannel
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setMessages }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList)