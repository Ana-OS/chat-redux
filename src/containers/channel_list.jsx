import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { setChannels } from '../actions';


class ChannelList extends Component {
    componentWillMount(){
        this.props.setChannels();
    }
    
    render() {
        return (
            <div className="channel-list col-10">
                {this.props.channels.map(channel => <Channel channel={channel} key={channel.name} />)}
            </div>
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators(
       { setChannels: setChannels },
       dispatch
    )
};

function mapStateToProps(state){
    return{
        channels: state.channels
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList)