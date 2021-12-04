import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setMessages } from '../actions';



class ChannelList extends Component {
    // se nos próximos props o selectedChannel for diferent do channel em que estou entao tenho de fazer nova API call para receber as mensagens desse channel

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedChannel !== this.props.selectedChannel) {
          this.props.setMessages(nextProps.selectedChannel);
        }
      }
      handleClick = (channel) => {
        this.props.selectChannel(channel);
      }
    
      renderChannel = (channel) => {
        return (
          <li
            key={channel}
            className={channel === this.props.selectedChannel ? 'active' : null}
            onClick={() => this.handleClick(channel)}
            role="presentation"
          >
            #{channel}
          </li>
        );
      }
      
    render() {
    return (
      <div className="channels-container">
        <span>Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
};


function mapStateToProps(state){
    return{
        channels: state.channelList,
        selectedChannel: state.selectedChannel
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, setMessages }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList)