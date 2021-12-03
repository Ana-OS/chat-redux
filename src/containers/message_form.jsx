import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { createMessage } from '../actions';



class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = { value: ''}
    }

    componentDidMount() {
        this.messageBox.focus();
      }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMessage(this.props.channel, this.props.author, this.state.value)
        this.setState({value:''})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="channel-editor">
           <input 
            ref={(input) => { this.messageBox = input; }}
            type="text" 
            id="content" 
            className="form-control"                 
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
            /> 
            <button type="submit">Send</button>
           </form>

        )
    }
}


function mapStateToProps(state){
    return{
        channel: state.selectedChannel,
        author: state.currentUser
    }
}

function mapDispatchToProps(dispatch){ 
    return bindActionCreators(
        { createMessage: createMessage },
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);